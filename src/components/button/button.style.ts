import styled from 'styled-components';

export const StyledButton = styled.button`
    align-self: flex-start;
    align-items: center;
    appearance: none;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    justify-content-space-between;
    padding: 10px 20px;
    margin: 20px 0 0 0;

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
