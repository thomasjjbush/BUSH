import React, { FunctionComponent, ReactElement } from 'react';
import { IconProps as Props } from '../../types';
import * as Styled from './icon.style';

export const Icon: FunctionComponent<Props> = (props: Props): ReactElement => {
    const testID = props.testID || 'icon';

    return props.onClick ? (
        <Styled.ClickableIcon aria-label={props.ariaLabel} data-test-id={testID} {...props} />
    ) : (
        <Styled.Icon data-test-id={testID} {...props} />
    );
};

Icon.displayName = 'Icon';
