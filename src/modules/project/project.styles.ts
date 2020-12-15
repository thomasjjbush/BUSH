import styled, { keyframes } from 'styled-components';
import { backgroundImage } from '../../utils';
import { StyledProps } from '../../types';
import { FlexBox } from '../theme/global';

export const Container = styled.div`
    margin-top: 40vh;
    background-color: ${(props): string => props.theme.colors.background};
`;

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

export const Hero = styled(FlexBox)<StyledProps<{ url: string }>>`
    background: ${({ color, theme, url }): string =>
            `linear-gradient(${color} 0, ${color} 80px, transparent 100%), ${backgroundImage(
                url,
                theme.isWebpSupported && 'webp',
            )}`}
        top center no-repeat;
    background-size: cover;
    height: 40vh;
    flex-shrink: 0;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    + div {
        padding: 0px;
    }
`;

export const Info = styled.div`
    margin: auto;
    max-width: 1200px;
    padding: 30px;
    z-index: 3;

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

export const SimilarContainer = styled(FlexBox)`
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

const animation = keyframes`
    from { opacity: 0 }
    to { opacity: 1 }
`;

export const Sticky = styled(FlexBox)`
    background-color: ${(props): string => props.color};
    height: 60px;
    left: 0;
    position: fixed;
    right: 0;
    top: 60px;
    z-index: 3;

    a {
        animation: ${animation} 1s forwards;
        opacity: 0;
    }
`;

export const StickyRef = styled.div`
    height: 60px;
`;
