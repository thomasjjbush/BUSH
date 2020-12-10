import React, { MutableRefObject } from 'react';
import { shallow } from 'enzyme';
import { HiddenText } from './hidden-text';
import { Button } from '../button/button';

function mockRef(clientHeight: number, scrollHeight: number): MutableRefObject<Partial<HTMLParagraphElement>> {
    return { current: { clientHeight, scrollHeight } };
}

describe('HiddenText', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should match snapshot when not scrollable', () => {
        expect(shallow(<HiddenText lines={2}>My text</HiddenText>)).toMatchSnapshot();
    });

    it('should match snapshot when scrollable', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce(mockRef(100, 200));
        expect(shallow(<HiddenText lines={2}>My text</HiddenText>)).toMatchSnapshot();
    });

    it('should unclamp text and hide button on click', () => {
        jest.spyOn(React, 'useRef').mockReturnValueOnce(mockRef(100, 200));
        const wrapper = shallow(<HiddenText lines={2}>My text</HiddenText>);

        wrapper.find(Button).prop('onClick')();

        expect(wrapper.find(Button).exists()).toBe(false);
        expect(wrapper).toMatchSnapshot();
    });
});
