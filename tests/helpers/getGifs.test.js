import { getGifs } from '../../src/helpers/getGifs';

describe('test getGifs.test', () => {
    test('should return an array', async () => {
        const gifs = await getGifs('Goku');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

    });
});

