import styled from 'styled-components';

export const StyledClient = styled.a<{ background: boolean; inverse: boolean }>`
    background-color: ${(props): string => (props.background ? 'white' : 'transparent')};
    display: inline-block;
    padding: 10px;
    ${(props): string => !props.background && props.inverse && `filter: brightness(0) invert(1);`}
`;
