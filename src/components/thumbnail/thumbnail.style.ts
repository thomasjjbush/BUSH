import styled from 'styled-components';
import { backgroundImage } from '../../utils';
import { StyledProps } from '../../types';

export const StyledBackground = styled.div<StyledProps<{ url: string }>>`
    align-items: center;
    background: linear-gradient(${(props): string => props.color} 0%, transparent 100%),
        ${({ theme, url }): string => backgroundImage(url, theme.isWebpSupported)};
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 30px;
`;

export const StyledName = styled.h1`
    color: white;
    text-align: center;
`;
