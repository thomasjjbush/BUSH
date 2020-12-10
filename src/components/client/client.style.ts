import styled from 'styled-components';

export const StyledClient = styled.a<{ background: boolean }>`
    background-color: ${(props): string => (props.background ? 'white' : 'transparent')};
    display: inline-block;
    padding: 10px;
`;
