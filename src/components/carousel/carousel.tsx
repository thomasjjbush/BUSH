import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import * as Styled from './carousel.style';
import { CarouselProps as Props, Icons } from '../../types';
import { Icon } from '../';
import { FlexBox } from '../../modules/theme/global';

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
        <FlexBox align="center" data-test-id="carousel">
            <Icon
                ariaLabel="previous"
                color={color}
                disabled={!index}
                icon={Icons.LEFT}
                onClick={(): void => setIndex(index - Math.min(index, 1))}
                size={30}
                testID="left-icon"
            />
            <Styled.Carousel>
                <Styled.Transform align="top" i={index} itemsToDisplay={itemsToDisplay} margin={margin}>
                    {children}
                </Styled.Transform>
            </Styled.Carousel>
            <Icon
                ariaLabel="next"
                color={color}
                disabled={index === numberOfItems - 1}
                onClick={(): void => setIndex(index + Math.min(numberOfItems - (index + itemsToDisplay), 1))}
                icon={Icons.RIGHT}
                size={30}
                testID="right-icon"
            />
        </FlexBox>
    );
};
