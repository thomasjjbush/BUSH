import styled from 'styled-components';

export const StyledError = styled.section`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
`;

export const StyledCode = styled.h1`
    color: ${props => props.theme.colors.brand};
    font-size: 10vw;
`;
