import { backgroundImage, imageOptions, isImageLandscape, responsiveImage } from './images';

describe('images', () => {
    describe('backgroundImage', () => {
        it('should return correct string', () => {
            expect(backgroundImage('http://mock-url', true)).toBe('url(http://mock-url?fm=webp&w=750)');
        });
    });

    describe('imageOptions', () => {
        it('should return the url with correct query parameters', () => {
            expect(imageOptions('https://mock-url', { fm: 'zing', w: 500, q: undefined })).toBe(
                'https://mock-url?fm=zing&w=500',
            );
        });

        it('should return url if no options are provided', () => {
            expect(imageOptions('https://mock-url')).toBe('https://mock-url');
        });
    });

    describe('isImageLandscape', () => {
        function mockImage(cb: 'onload' | 'onerror', width?: number, height?: number): void {
            (global as any).Image = class {
                public onerror: () => void;
                public onload: () => void;
                public naturalHeight: number;
                public naturalWidth: number;

                constructor() {
                    setTimeout(() => this[cb](), 100);
                    this.naturalHeight = height;
                    this.naturalWidth = width;
                }
            };
        }

        it('should return false onError', async () => {
            mockImage('onerror');
            const expected = await isImageLandscape('xxx');
            expect(expected).toBe(false);
        });

        it('should return true if naturalWidth is greater than natural height', async () => {
            mockImage('onload', 200, 100);
            const expected = await isImageLandscape('xxx');
            expect(expected).toBe(true);
        });

        it('should return true if naturalWidth is greater than natural height', async () => {
            mockImage('onload', 100, 200);
            const expected = await isImageLandscape('xxx');
            expect(expected).toBe(false);
        });
    });

    describe('responsiveImage', () => {
        it('should return image url with query params at all scales', () => {
            expect(responsiveImage('http://mock-url', { h: 300, fm: 'fm', q: 4, w: 500 })).toBe(
                'http://mock-url?h=300&fm=fm&q=4&w=100 100w,http://mock-url?h=300&fm=fm&q=4&w=200 200w,http://mock-url?h=300&fm=fm&q=4&w=300 300w,http://mock-url?h=300&fm=fm&q=4&w=400 400w,http://mock-url?h=300&fm=fm&q=4&w=500 500w',
            );
        });
    });
});
