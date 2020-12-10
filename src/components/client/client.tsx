import React, { forwardRef } from 'react';
import { Image } from '../';
import { StyledClient } from './client.style';
import { ClientProps as Props } from '../../types';

export const Client = forwardRef<HTMLAnchorElement, Props>(
    ({ alt, background = true, logo, size, url, width }: Props, ref) => {
        return (
            <StyledClient
                background={background}
                {...(url && { href: url })}
                ref={ref}
                rel="noreferrer"
                target="_blank"
            >
                <Image alt={alt} src={logo} width={width} size={size} />
            </StyledClient>
        );
    },
);

Client.displayName = 'Client';
