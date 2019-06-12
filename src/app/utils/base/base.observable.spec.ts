import { forkJoin, Observable } from 'rxjs';
import { CollectionViewer, ListRange } from '@angular/cdk/collections';

import {
    AppObservableArray, AppObservableArrayModes, AppObservableObject,
    AppObservablePersistentObject, AppDataSource, NumberValueObserver
} from './base.observable';


class TestObservable extends AppObservableArray<string> { }

describe('TestObservable', () => {

    it('default mode is selected by constructor', () => {
        const testObj = new TestObservable('foo');

        let state = null;
        testObj.observable.subscribe(_state => state = _state);

        // Adding new item should succeed
        testObj.addSubject('bar');
        expect(state).toEqual(['bar']);
    });

    it('supports persistent observable', () => {
        const testObj = new TestObservable(AppObservableArrayModes.PERSISTENT);

        // Adding 2 items should be available for late subscription
        testObj.addSubject('bar');
        testObj.addSubject('foo');

        expect(testObj.arrayLength).toEqual(2);

        // Late subscription
        let state = null;
        testObj.observable.subscribe(_state => state = _state);

        // Items are available
        expect(state).toEqual(['bar', 'foo']);

        // Remove first item
        testObj.removeSubject((item) => {
            return (item === 'bar') ? true : false;
        });
        expect(state).toEqual(['foo']);

        // Remove all items
        testObj.removeAllSubjects();
        expect(state).toEqual([]);

        // Append new item and publish
        state = null;
        testObj.push(['oof']);
        testObj.next();
        expect(state).toEqual(['oof']);
    });

    it('supports observable with initial value', () => {
        const testObj = new TestObservable(AppObservableArrayModes.EMPTY);

        let state = null;
        testObj.observable.subscribe(_state => state = _state);

        // Initial value is as expected
        expect(state).toEqual([]);

        // Adding new value succeeds
        testObj.addSubjects(['foo']);
        expect(state).toEqual(['foo']);
    });

    it('sequence is completed', () => {
        let state = null;

        const testObj = new TestObservable(AppObservableArrayModes.EMPTY);
        forkJoin([testObj.observable]).subscribe(results => state = results[0]);

        // Item is added to sequence, next and complete is called which will
        // fire the above forkJoin
        testObj.push(['foobar']);
        testObj.next();
        testObj.complete();
        expect(state).toEqual(['foobar']);
    });
});


describe('NumberValueObserver', () => {

    it('subscription works', () => {
        const testObj = new NumberValueObserver();

        let value = 0;
        testObj.observable.subscribe(_value => value = _value);

        // Adding new value should succeed
        testObj.setObject(3);
        expect(value).toEqual(3);
    });
});


class SubjectObservable extends AppObservableObject<string> { }

describe('SubjectObservable', () => {

    it('object subscription works', () => {
        const testObj = new SubjectObservable();

        let state = null;
        testObj.observable.subscribe(_state => state = _state);

        // Adding new item should succeed
        testObj.setObject('bar');
        expect(state).toEqual('bar');
    });

    it('object subscription using asPipe method works', () => {
        const testObj = new SubjectObservable();

        let state = null;
        testObj.asPipe().subscribe(_state => state = _state);

        // Adding new item should succeed
        testObj.setObject('bar');
        expect(state).toEqual('bar');

        // When observer is closed from emitting new values
        testObj.closeSubject();

        // New values are no longer received
        testObj.setObject('foo');
        expect(state).toEqual('bar');
    });
});


class ReplayObservable extends AppObservablePersistentObject<string> { }

describe('ReplaySubjectObservable', () => {

    it('late subscription works', () => {
        const testObj = new ReplayObservable();

        testObj.setObject('bar');

        // Late subscription works
        let state = null;
        testObj.observable.subscribe(_state => state = _state);
        expect(state).toEqual('bar');
    });
});


class TestDataSource extends AppDataSource<number> {
    pages = [];

    getData(page: number, initialize: boolean) {
        this.pages.push(page);

        const data = {
            results: [1, 2, 3],
            total_results: 12
        }

        if (initialize) {
            this.setInitialData(data.results.length, data.total_results);
        }

        this.setData(data.results, page);
    }
}

class DataViewer extends AppObservableObject<ListRange> implements CollectionViewer {
    viewChange: Observable<ListRange>;

    constructor() {
        super();
        this.viewChange = this.observable;
    }
}

describe('AppDataSource', () => {
    let source;

    beforeEach(() => {
        source = new TestDataSource();
    });

    afterEach(() => {
        source.disconnect();
    });

    it('new data is requested', (done) => {
        // Viewer that requests more data from source
        const viewer = new DataViewer();

        // Observable to the source data
        const observable = source.connect(viewer);

        // Subscribe to requested data
        let counter = 0;
        let refArray = [1, 2, 3];
        observable.subscribe((data) => {
            counter++;

            expect(data.results).toEqual(refArray);
            expect(source.pages.length).toEqual(counter);

            console.log(data, counter);
            if (counter == 3)
                done();

            refArray = refArray.concat([1, 2, 3]);
        });

        // Request data ranging from 0 to 6 -> 3 pages needed
        viewer.setObject({ start: 0, end: 6 });
    });
});
