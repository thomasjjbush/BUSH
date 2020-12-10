import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from './icon';
import { Icons } from '../../types';
import { StyledIcon } from './icon.style';

describe('Icon', () => {
    it('should match snapshot', () => {
        expect(shallow(<Icon icon={Icons.CONTRAST} />)).toMatchSnapshot();
    });

    it('should match snapshot when optional args are provided', () => {
        expect(shallow(<Icon color="red" disabled icon={Icons.CONTRAST} size={60} />)).toMatchSnapshot();
    });

    it('should invoke onClick cb on click and set tab-index to 0 if onClick is provided', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Icon icon={Icons.CONTRAST} onClick={onClick} />);
        const styledIcon = wrapper.find(StyledIcon);
        styledIcon.simulate('click');

        expect(styledIcon.prop('tabIndex')).toBe(0);
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
