import React from 'react';
import { shallow } from 'enzyme';
import { Error, errors } from './error';
import { ErrorProps as Props } from '../../types';

describe('Button', () => {
    let props: Props;

    beforeEach(() => {
        props = {
            code: 400,
            button: <button>Button</button>,
        };
    });

    it('should match snapshot', () => {
        const wrapper = shallow(<Error {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it.each`
        code   | message
        ${400} | ${'Bad Request'}
        ${401} | ${'Unauthorized'}
        ${403} | ${'Forbidden'}
        ${404} | ${'Not Found'}
        ${500} | ${'Internal Server Error'}
    `('Should render correct message for $code', ({ code, message }) => {
        const wrapper = shallow(<Error {...props} code={code} />);
        expect(wrapper.find('p').text()).toBe(message);
    });

    it('should not render p tag if code does not exist in table', () => {
        const wrapper = shallow(<Error {...props} code={666} />);
        expect(wrapper.find('p').exists()).toBe(false);
    });
});
