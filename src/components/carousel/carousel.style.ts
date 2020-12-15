import styled from 'styled-components';
import { FlexBox } from '../../modules/theme/global';

export const Carousel = styled.div`
    flex: 1;
    overflow: hidden;
`;

export const Transform = styled(FlexBox)<{ itemsToDisplay: number; i: number; margin: number }>`
    ${({ i, itemsToDisplay, margin }): string => `
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
