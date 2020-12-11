import styled from 'styled-components';

export const StyledButton = styled.button`
    align-items: center;
    align-self: flex-start;
    appearance: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    justify-content-space-between;
    margin: 20px 0 0 0;
    padding: 10px 20px;

    img {
        margin-left: 10px;
    }
`;

export const StyledPrimaryButton = styled(StyledButton)`
    background-color: ${(props): string => props.theme.colors.brand};
    border: 0;
    color: white;
`;

export const StyledSecondaryButton = styled(StyledButton)`
    background-color: transparent;
    border: solid 2px ${(props): string => props.theme.colors.brand};
    color: ${(props): string => props.theme.colors.text};
`;
