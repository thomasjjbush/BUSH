import React from 'react';
import { shallow } from 'enzyme';
import { Thumbnail } from './thumbnail';
import { AspectRatios } from '../../types';

describe('Thumbnail', () => {
    it('should match snapshot', () => {
        expect(
            shallow(
                <Thumbnail
                    client={<span>client</span>}
                    color="red"
                    name="name"
                    ratio={AspectRatios['8:5']}
                    url="url"
                />,
            ),
        ).toMatchSnapshot();
    });
});
