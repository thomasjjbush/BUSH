import React, { FunctionComponent, ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { Image } from '../';
import { StyledLoading } from './loading.style';
import { Theme } from '../../types';

export const Loading: FunctionComponent = (): ReactElement => {
    const { images } = useTheme() as Theme;

    return (
        <StyledLoading data-test-id="loading">
            <p>LOADING</p>
            <Image src={images.loading} size={200} width={30} />
        </StyledLoading>
    );
};
