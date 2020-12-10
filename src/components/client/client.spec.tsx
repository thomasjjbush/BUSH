import React from 'react';
import { shallow } from 'enzyme';
import { Client } from './client';

describe('Client', () => {
    it('should match snapshot', () => {
        expect(
            shallow(<Client alt="alt" background={false} logo="logo" size={20} url="url" width={10} />),
        ).toMatchSnapshot();
    });

    it('should match snapshot with default argument of backrgound', () => {
        expect(shallow(<Client logo="logo" size={20} url="url" width={10} />)).toMatchSnapshot();
    });
});
