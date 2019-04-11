import { eventHandler } from './entry';


describe('Audio web worker entry', () => {
    it('Unsupported mime type', (done) => {
        // GIVEN unsupported decoder configuration data
        const config = { config: { mime: 'audio/pcmi' } };

        // WHEN initializing the decoder
        eventHandler({ data: config }, (event) => {
            // THEN error should be returned
            expect(event.error).toEqual('Unsupported mime type audio/pcmi');
            done();
        });
    });

    it('PCM decoder is initialized', (done) => {
        // GIVEN PCM decoder configuration data
        const data = { config: { mime: 'audio/pcm', samplerate: 44100, channels: 2 } };

        // WHEN initializing the decoder
        eventHandler({ data }, (event) => {
            // THEN it should succeed and return decoder information
            expect(event.config.sampleRate).toEqual(44100);
            expect(event.config.numberOfChannels).toEqual(2);
            done();
        });
    });
});
