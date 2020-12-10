import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './loading';

describe('Thumbnail', () => {
    it('should match snapshot', () => {
        expect(shallow(<Loading />)).toMatchSnapshot();
    });
});
