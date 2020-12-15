import React, { FunctionComponent, ReactElement } from 'react';
import { Image } from '../';
import { StyledClient } from './client.style';
import { ClientProps as Props } from '../../types';

export const Client: FunctionComponent<Props> = ({
    alt,
    background = true,
    logo,
    size,
    url,
    width,
}: Props): ReactElement => (
    <StyledClient background={background} {...(url && { href: url })} rel="noreferrer" target="_blank">
        <Image alt={alt} src={logo} width={width} size={size} />
    </StyledClient>
);

Client.displayName = 'Client';
