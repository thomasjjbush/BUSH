import styled from 'styled-components';
import { StyledProps } from '../../types';

export const StyledTag = styled.span<StyledProps>`
    background-color: ${(props): string => props.theme.colors.brand};
    border-radius: 5px;
    color: white;
    font-family: Roboto Mono;
    font-size: 13px;
    padding: 5px;
    margin: 5px 5px 0 0;
`;

export const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
