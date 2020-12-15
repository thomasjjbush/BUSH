import styled from 'styled-components';
import { StyledProps } from '../../types';

export const CV = styled.section<StyledProps>`
    align-self: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    background-color: ${(props): string => props.theme.colors.offset};
    padding: 30px;
`;

export const CVContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 500px;

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.tabletPortrait}px) {
        flex: 1 0 0;
        margin-bottom: 30px;
        margin-right: 0 !important;
        max-height: 40%;
        max-width: none;
    }

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
        display: none;
    }
`;

export const CVInfo = styled.div`
    margin-bottom: 30px;
`;

export const CVTitle = styled.p`
    margin: 0 0 30px 0;
`;

export const Date = styled.p`
    margin: 0;
`;

export const Experience = styled.div`
    display: grid;
    grid-template-columns: 25% 30px auto;
`;

export const ExperienceInfo = styled.div`
    flex: 1;
    padding-left: 30px;
`;

export const Filters = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-bottom: 15px;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    grid-gap: 10px;
    margin: 1px;

    @media only screen and (max-width: ${(props): number => props.theme.breakpoints.mobile}px) {
        grid-template-columns: auto;
        grid-gap: 30px;
    }
`;

export const Input = styled.input<StyledProps>`
    background-color: ${(props): string => props.theme.colors.highlight};
    border: solid 2px ${(props): string => props.theme.colors.border};
    border-radius: 5px;
    color: ${(props): string => props.theme.colors.text};
    flex: 1;
    font-size: 16px;
    height: 40px;
    padding: 0 10px;
`;

export const Projects = styled.section`
    display: flex;
    flex-direction: column;
    overflow: visible;
`;

export const Select = styled.select<StyledProps>`
    appearance: none;
    background-color: ${(props): string => props.theme.colors.highlight};
    border: solid 2px ${(props): string => props.theme.colors.border};
    border-radius: 5px;
    color: ${(props): string => props.theme.colors.text};
    flex-shrink: 0;
    font-size: 16px;
    margin-left: 15px;
    padding: 0 5px;
    width: 60px;
`;

export const Section = styled.section`
    flex: 1;
`;

export const Timeline = styled.div<StyledProps>`
    :before,
    :after {
        background-color: ${(props): string => props.theme.colors.brand};
        content: '';
        display: block;
        margin: auto;
    }
    :before {
        border-radius: 50%;
        height: 20px;
        width: 20px;
    }

    :after {
        height: 100%;
        width: 2px;
    }
`;
