import React, { FunctionComponent, ReactElement } from 'react';
import { ErrorProps as Props, Errors } from '../../types';
import { StyledCode, StyledError } from './error.style';

export const errors: Errors = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
};

export const Error: FunctionComponent<Props> = ({ button, code }: Props): ReactElement => {
    return (
        <StyledError>
            <StyledCode>{code}</StyledCode>
            {errors[code] && <p>{errors[code]}</p>}
            {button}
        </StyledError>
    );
};
