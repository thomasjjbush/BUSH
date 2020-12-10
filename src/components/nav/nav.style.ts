import styled from 'styled-components';
import { StyledProps } from '../../types';

export const StyledNav = styled.nav<StyledProps>`
    background-color: ${(props): string => props.theme.colors.highlight};
    box-shadow: 0px 3px 5px 0px rgba(50, 50, 50, 0.25);
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 10px;
    z-index: 1;

    button {
        margin: 0;

        @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
            display: none;
        }
    }
`;

export const StyledActions = styled.div`
    align-items: center;
    display: flex;

    a {
        margin-right: 10px;

        i {
            color: ${props => props.theme.colors.text};
        }
    }
`;
