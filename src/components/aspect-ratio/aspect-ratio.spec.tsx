import React from 'react';
import { shallow } from 'enzyme';
import { AspectRatios } from '../../types';
import { AspectRatio } from './aspect-ratio';
import { StyledAspectRatioContainer } from './aspect-ratio.style';

describe('AspectRatio', () => {
    it.each([
        AspectRatios['16:9'],
        AspectRatios['1:1'],
        AspectRatios['32:9'],
        AspectRatios['3:2'],
        AspectRatios['4:3'],
        AspectRatios['8:5'],
    ])('should render correct ratio', (ratio: AspectRatios) => {
        expect(shallow(<AspectRatio ratio={ratio} />)).toMatchSnapshot();
    });

    it('should render children if provided', () => {
        const wrapper = shallow(<AspectRatio ratio={AspectRatios['16:9']}>Child</AspectRatio>);
        expect(wrapper.find(StyledAspectRatioContainer).text()).toBe('Childs');
    });
});
