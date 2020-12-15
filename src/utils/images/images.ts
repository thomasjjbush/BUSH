import { imageScales } from '../../config';

interface Options {
    [key: string]: string | number;
    fm?: string;
    h?: number;
    q?: number;
    w?: number;
}

export const imageOptions = (url: string, options?: Options): string => {
    if (!options) return url;

    const params: string[] = [];
    Object.keys(options).forEach(key => {
        if (options[key]) params.push(`${!params.length ? '?' : '&'}${key}=${options[key]}`);
    });
    return url + params.join('');
};

export const backgroundImage = (url: string, fm: string): string => `url(${imageOptions(url, { fm, w: 750 })})`;

export const isImageLandscape = (src: string): Promise<boolean> =>
    new Promise(resolve => {
        const img = new Image();
        img.src = src;

        img.onload = (): void => resolve(img.naturalWidth > img.naturalHeight);
        img.onerror = (): void => resolve(false);
    });

export const isWebpSupported = (): boolean =>
    document
        .createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') == 0;

export const responsiveImage = (url: string, options: Options & { w: number }): string =>
    imageScales
        .map(scale => {
            const width = scale * options.w;
            return `${imageOptions(url, { ...options, w: width })} ${width}w`;
        })
        .join();
