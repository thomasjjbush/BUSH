import React, { FunctionComponent, ReactElement } from 'react';
import { ImageProps as Props } from '../../types';
import { responsiveImage } from '../../utils';

export const Image: FunctionComponent<Props> = ({ alt, height, quality, size, src, width }: Props): ReactElement => {
    const sourceSrcSet = responsiveImage(src, { fm: 'webp', h: height, q: quality, w: size });
    const imageSrcSet = responsiveImage(src, { h: height, q: quality, w: size });

    return (
        <picture>
            <source srcSet={sourceSrcSet} />
            <img alt={alt || 'img'} height={height || 'auto'} src={src} srcSet={imageSrcSet} width={width || 'auto'} />
        </picture>
    );
};

Image.displayName = 'Image';
