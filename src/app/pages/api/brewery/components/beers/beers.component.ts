import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { NetworkService, ConnectionOptions } from '../../../../../services';
import { InfiniteScrollFn } from '../../../../../widgets';
import { Beer } from '../../models';
import { getBeers } from '../../store';
import * as Actions from '../../store/actions';


const BASE_URL = 'https://api.punkapi.com/v2/beers';

@Component({
    selector: 'dng-beers',
    templateUrl: './beers.component.html'
})
export class BeersComponent implements OnInit {
    page = 1;
    list = [];
    scrollCb: InfiniteScrollFn;
    protected connectionOptions = new ConnectionOptions();

    constructor(private store: Store<any>, private network: NetworkService) {
        this.connectionOptions.cors = true;
        this.scrollCb = (): Observable<boolean> => this.getBeers(this.page);
    }

    ngOnInit() {
        // Changes occured to beers data
        this.store.pipe(select(getBeers)).subscribe((data) => {
            this.page = data.page;
            this.list = data.beers;

            // Load initial data
            if (this.list.length === 0) {
                this.getBeers(this.page, 0).subscribe(() => { });
            }
        });
    }

    protected getBeers(page: number, timeout = 750): Observable<boolean> {
        const url = `${BASE_URL}?page=${page}`;
        return this.network.get(url, this.connectionOptions).pipe(
            delay(timeout),
            map((response) => {
                this.store.dispatch(Actions.saveAction({
                    beers: response as Array<Beer>,
                    page: page + 1
                }));

                return true;
            })
        );
    }
}
