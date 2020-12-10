import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './button';
import { StyledPrimaryButton, StyledSecondaryButton } from './button.style';
import { ButtonProps, Buttons } from '../../types';

describe('Button', () => {
    let props: ButtonProps;

    beforeEach(() => {
        props = {
            children: 'Label',
            design: Buttons.PRIMARY,
            onClick: jest.fn(),
        };
    });

    it('should render null if no onClick cb is provided', () => {
        const wrapper = shallow(<Button {...props} onClick={undefined} />);
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    it('should render primary button correctly and invoke onClick cb on click', () => {
        const wrapper = shallow(<Button {...props} />);
        const primaryButton = wrapper.find(StyledPrimaryButton);
        primaryButton.simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render secondary button correctly and invoke onClick cb on click', () => {
        const wrapper = shallow(<Button {...props} design={Buttons.SECONDARY} />);
        const secondaryButton = wrapper.find(StyledSecondaryButton);
        secondaryButton.simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
        expect(wrapper).toMatchSnapshot();
    });
});
