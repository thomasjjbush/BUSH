import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from './nav';

describe('Nav', () => {
    it('should match snapshot', () => {
        expect(shallow(<Nav darkMode={true} />)).toMatchSnapshot();
    });
});
