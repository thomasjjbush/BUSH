import React, { FunctionComponent, ReactElement } from 'react';
import { ButtonProps as Props, Buttons } from '../../types';
import { StyledPrimaryButton, StyledSecondaryButton } from './button.style';

export const Button: FunctionComponent<Props> = (props: Props): ReactElement => {
    if (!props.onClick) return null;
    return props.design === Buttons.PRIMARY ? (
        <StyledPrimaryButton {...props} type="button">
            {props.children}
        </StyledPrimaryButton>
    ) : (
        <StyledSecondaryButton {...props} type="button">
            {props.children}
        </StyledSecondaryButton>
    );
};

Button.displayName = 'Button';
