import React from 'react';
import { shallow } from 'enzyme';
import { ImageProps as Props } from '../../types';
import { Image } from './image';

describe('Image', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            quality: 44,
            size: 200,
            src: 'https://some-url',
        };
    });

    it('should use alt prop if provided', () => {
        const wrapper = shallow(<Image {...props} alt="some alt message" />);
        expect(wrapper.find('img').prop('alt')).toBe('some alt message');
    });

    it('should use height prop if provided', () => {
        const wrapper = shallow(<Image {...props} height={222} />);
        expect(wrapper.find('img').prop('height')).toBe(222);
    });

    it('should use width prop if provided', () => {
        const wrapper = shallow(<Image {...props} width={111} />);
        expect(wrapper.find('img').prop('width')).toBe(111);
    });

    it('should match snapshot', () => {
        expect(shallow(<Image {...props} />)).toMatchSnapshot();
    });
});
