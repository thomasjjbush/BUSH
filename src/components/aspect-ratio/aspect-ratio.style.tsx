import styled from 'styled-components';
import { AspectRatios } from './../../types';

export const StyledAspectRatio = styled.div<{ ratio: AspectRatios }>`
    height: 0;
    padding-bottom: ${(props): AspectRatios => props.ratio}%;
    position: relative;
`;

export const StyledAspectRatioContainer = styled.div`
    bottom: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
`;
