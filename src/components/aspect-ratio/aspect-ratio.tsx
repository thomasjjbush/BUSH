import React, { FunctionComponent, ReactElement } from 'react';
import { StyledAspectRatio, StyledAspectRatioContainer } from './aspect-ratio.style';
import { AspectRatioProps as Props } from './../../types';

export const AspectRatio: FunctionComponent<Props> = ({ children, ratio }: Props): ReactElement => {
    return (
        <StyledAspectRatio ratio={ratio}>
            <StyledAspectRatioContainer>{children}</StyledAspectRatioContainer>
        </StyledAspectRatio>
    );
};

AspectRatio.displayName = 'AspectRatio';
