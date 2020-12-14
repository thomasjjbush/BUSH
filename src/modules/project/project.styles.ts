import styled from 'styled-components';
import { backgroundImage } from '../../utils';
import { StyledProps } from '../../types';

export const Description = styled.p`
    grid-column: 2 / 4;
    margin: 0;

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
        grid-column: auto;
    }
`;

export const Grid = styled.div<StyledProps<{ cols: number; colGap?: number; rowGap?: number }>>`
    display: grid;
    grid-column-gap: ${(props): number => props.colGap || 0}px;
    grid-row-gap: ${(props): number => props.rowGap || 0}px;
    grid-template-columns: ${(props): string => `repeat(${props.cols}, minmax(0, 1fr))`};

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
        grid-template-columns: auto;
    }
`;

export const Hero = styled.div<StyledProps<{ url: string }>>`
    align-items: center;
    background: ${({ color, theme, url }): string =>
        `linear-gradient(${color} 0, ${color} 100px, transparent 100%), ${backgroundImage(
            url,
            theme.isWebpSupported && 'webp',
        )}`};
    background-size: cover;
    display: flex;
    height: 100%;
    flex-shrink: 0;
    justify-content: center;
    transition: height 0.25s;
`;

export const Info = styled.div`
    margin: auto;
    max-width: 1200px;
    padding: 30px;

    & > div:not(:last-child) {
        margin-bottom: 60px;
    }
`;

export const Panel = styled.div<StyledProps>`
    background-color: ${(props): string => props.theme.colors.offset};
    padding: 30px;
`;

export const Responsibility = styled.div<StyledProps>`
    border-bottom: solid 2px ${(props): string => props.theme.colors.brand};
    padding-bottom 15px;
    text-align: center;

    & > i {
        dispay: block;
    }

    h1 {
        text-align: center;
    }

    button {
        margin: auto;
    }
`;

export const SimilarContainer = styled.div`
    display: flex;

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.tabletPortrait}px) {
        display: block;
    }
`;

export const Similar = styled.div<StyledProps<{ url: string }>>`
    background: ${({ color, theme, url }): string =>
        `linear-gradient(90deg, ${color} 0%, transparent 100%), ${backgroundImage(
            url,
            theme.isWebpSupported && 'webp',
        )}`};
    background-size: cover;
    flex: 1;
    height: 100px;
    line-height: 100px;
    overflow: hidden;
    padding: 0 30px;

    h1 {
        color: white;
        max-width: 85%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;
