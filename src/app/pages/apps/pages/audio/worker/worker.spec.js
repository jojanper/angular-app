describe('Web Worker', () => {
    let worker;

    beforeEach(() => {
        console.log('WORKER');
        worker = new Worker('/base/src/app/pages/apps/pages/audio/worker/worker.js');
        console.log(worker);
    });

    it('fails', (done) => {
        worker.onerror = (err) => {
            expect(err).toBeDefined();
            done();
        };
        worker.postMessage({decode: []});
    });
});
