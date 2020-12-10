import React from 'react';
import { shallow } from 'enzyme';
import { Scroller } from './scroller';
import { ScrollerProps as Props } from '../../types';
import { StyledScroller } from './scroller.style';
import { Button, Image } from '../';

describe('Tags', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            children: <div>children</div>,
            loading: false,
            loadMore: jest.fn(),
            onScroll: jest.fn(),
        };
    });

    it('should match snapshot', () => {
        expect(shallow(<Scroller {...props} />)).toMatchSnapshot();
    });

    it('should invoke onScroll cb on scroll', () => {
        const wrapper = shallow(<Scroller {...props} />);
        wrapper.find(StyledScroller).prop('onScroll')();
        expect(props.onScroll).toHaveBeenCalledTimes(1);
    });

    it('should render button if loadMore and numberOfItems is less than totalItems', () => {
        const wrapper = shallow(<Scroller {...props} numberOfItems={1} totalItems={2} />);
        wrapper.find(Button).prop('onClick')();
        expect(props.loadMore).toHaveBeenCalledTimes(1);
    });

    it('should render button with loading image if loading', () => {
        const wrapper = shallow(<Scroller {...props} loading numberOfItems={1} totalItems={2} />);
        const loadingImage = wrapper.find(Image);
        expect(loadingImage.prop('src')).toBe('theme.images.loading');
        expect(loadingImage.prop('size')).toBe(100);
        expect(loadingImage.prop('width')).toBe(20);
    });
});
