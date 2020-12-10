import styled from 'styled-components';

export const StyledCarousel = styled.div`
    flex: 1;
    overflow: hidden;
`;

export const StyledCarouselContainer = styled.div`
    display: flex;
`;

export const StyledTransform = styled.div<{ itemsToDisplay: number; i: number; margin: number }>`
    ${({ i, itemsToDisplay, margin }): string => `
        align-items: top;
        display: flex;
        margin: 0 5px;
        transform: translate3d(calc(${-i * (100 / itemsToDisplay)}% - ${i * (margin / itemsToDisplay)}px), 0, 0);
        transition: transform 450ms ease-out;
        > * {
            flex-shrink: 0;
            width: calc(${100 / itemsToDisplay}% - ${(margin * (itemsToDisplay - 1)) / itemsToDisplay}px);

            :not(:last-of-type) {
                margin-right: ${margin}px;
            }
        }
    `}
`;
