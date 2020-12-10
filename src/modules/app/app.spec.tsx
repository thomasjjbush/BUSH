import React from 'react';
import { shallow } from 'enzyme';
import { App } from './app';
import { initTheme } from '../theme/theme';
import { StyledToggle } from './app.style';

jest.mock('../theme/theme', () => ({ initTheme: jest.fn().mockReturnValue({ colors: { text: 'colors.text' } }) }));
jest.mock('../../utils', () => ({
    ...jest.requireActual('../../utils'),
    client: 'client',
}));

describe('App', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should match snapshot', () => {
        expect(shallow(<App />)).toMatchSnapshot();
    });

    it('should toggle dark mode on toggle click', () => {
        const wrapper = shallow(<App />);
        expect(initTheme).toHaveBeenCalledTimes(1);
        expect(initTheme).toHaveBeenCalledWith(true);
        expect(wrapper.find(StyledToggle).prop('aria-label')).toBe('Enable light mode');

        wrapper.find(StyledToggle).prop('onClick')();
        expect(initTheme).toHaveBeenCalledTimes(2);
        expect(initTheme).toHaveBeenNthCalledWith(2, false);
        expect(wrapper.find(StyledToggle).prop('aria-label')).toBe('Enable dark mode');
    });
});
