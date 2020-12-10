import React, { FunctionComponent, ReactElement } from 'react';
import { AspectRatio } from '../aspect-ratio/aspect-ratio';
import { StyledBackground, StyledName } from './thumbnail.style';
import { AspectRatios, ThumbnailProps as Props } from '../../types';

export const Thumbnail: FunctionComponent<Props> = ({
    client,
    color,
    name,
    ratio = AspectRatios['1:1'],
    url,
}: Props): ReactElement => {
    return (
        <AspectRatio ratio={ratio}>
            <StyledBackground url={url} color={color}>
                <StyledName>{name}</StyledName>
                {client}
            </StyledBackground>
        </AspectRatio>
    );
};
