import React, { forwardRef, ReactElement } from 'react';
import { useTheme } from 'styled-components';
import { Button, Image } from '../';
import { labels } from '../../config';
import { StyledScroller } from './scroller.style';
import { ScrollerProps as Props, Theme } from './../../types';

export const Scroller = forwardRef<HTMLDivElement, Props>(
    ({ children, loading, loadMore, numberOfItems, onScroll, testID, totalItems }: Props, ref): ReactElement => {
        const { images } = useTheme() as Theme;

        return (
            <StyledScroller data-test-id={testID || 'scroller'} onScroll={onScroll} ref={ref} tabIndex={0}>
                {children}
                {loadMore && numberOfItems < totalItems && (
                    <Button data-test-id="load-more-cta" onClick={loadMore}>
                        {labels.loadMore}
                        {loading && <Image src={images.loading} size={100} width={20} alt="loading-icon" />}
                    </Button>
                )}
            </StyledScroller>
        );
    },
);

Scroller.displayName = 'Scroller';
