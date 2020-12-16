import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './nav';
import { Button } from '../button/button';

jest.spyOn(window, 'open');

describe('Nav', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should match snapshot', () => {
        expect(shallow(<Nav darkMode={true} />)).toMatchSnapshot();
    });

    it('should open dark mode cv if dark mode is enabled', () => {
        const wrapper = shallow(<Nav darkMode={true} />);
        wrapper.find(Button).simulate('click');

        expect(window.open).toHaveBeenCalledTimes(1);
        expect(window.open).toHaveBeenCalledWith('dark-mode.pdf', '_blank');
    });

    it('should open light mode cv if dark mode is disabled', () => {
        const wrapper = shallow(<Nav darkMode={false} />);
        wrapper.find(Button).simulate('click');

        expect(window.open).toHaveBeenCalledTimes(1);
        expect(window.open).toHaveBeenCalledWith('light-mode.pdf', '_blank');
    });
});
