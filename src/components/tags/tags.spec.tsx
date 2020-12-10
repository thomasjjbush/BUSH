import React from 'react';
import { shallow } from 'enzyme';
import { Tags } from './tags';

describe('Tags', () => {
    it('should match snapshot', () => {
        const tags = [
            { name: 'x', slug: 'x' },
            { name: 'y', slug: 'y' },
            { name: 'z', slug: 'z' },
        ];
        expect(shallow(<Tags tags={tags} />)).toMatchSnapshot();
    });
});
