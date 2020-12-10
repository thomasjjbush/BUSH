import React, { FunctionComponent, ReactElement } from 'react';
import { IconProps as Props } from '../../types';
import { StyledIcon } from './icon.style';

export const Icon: FunctionComponent<Props> = (props: Props): ReactElement => (
    <StyledIcon data-test-id={props.testID || 'icon'} {...props} {...(props.onClick && { tabIndex: 0 })} />
);

Icon.displayName = 'Icon';
