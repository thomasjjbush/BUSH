import styled from 'styled-components';

export const StyledText = styled.p<{ clamped: boolean; lines: number }>`
    display: ${(props): string => (props.clamped ? '-webkit-box' : 'auto')};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: ${(props): number => props.lines};
    -webkit-box-orient: vertical;
`;
