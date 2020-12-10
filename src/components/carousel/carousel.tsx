import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import { StyledCarousel, StyledCarouselContainer, StyledTransform } from './carousel.style';
import { CarouselProps as Props, Icons } from '../../types';
import { Icon } from '../';

export const Carousel: FunctionComponent<Props> = ({
    children,
    color,
    itemsToDisplay = 3,
    numberOfItems,
    margin = 0,
    startingIndex = 0,
}: Props): ReactElement => {
    const [index, setIndex] = useState(startingIndex);

    useEffect(() => {
        if (index > numberOfItems - itemsToDisplay) {
            setIndex(numberOfItems - itemsToDisplay);
        }
    }, [itemsToDisplay, index, numberOfItems]);

    return (
        <StyledCarouselContainer data-test-id="carousel">
            <Icon
                color={color}
                disabled={!index}
                icon={Icons.LEFT}
                onClick={(): void => setIndex(index - Math.min(index, 1))}
                size={30}
                testID="left-icon"
            />
            <StyledCarousel>
                <StyledTransform i={index} itemsToDisplay={itemsToDisplay} margin={margin}>
                    {children}
                </StyledTransform>
            </StyledCarousel>
            <Icon
                color={color}
                disabled={index === numberOfItems - itemsToDisplay}
                onClick={(): void => setIndex(index + Math.min(numberOfItems - (index + itemsToDisplay), 1))}
                icon={Icons.RIGHT}
                size={30}
                testID="right-icon"
            />
        </StyledCarouselContainer>
    );
};
