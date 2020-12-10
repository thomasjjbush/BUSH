import { imageScales, labels, orders, routes } from './';

describe('configs', () => {
    describe('imageScales', () => {
        it('should match snapshot', () => {
            expect(imageScales).toMatchSnapshot();
        });
    });

    describe('labels', () => {
        it('should match snapshot', () => {
            expect(labels).toMatchSnapshot();
        });
    });

    describe('orders', () => {
        it('should match snapshot', () => {
            expect(orders).toMatchSnapshot();
        });
    });

    describe('routes', () => {
        it('should match snapshot', () => {
            expect(routes).toMatchSnapshot();
        });
    });
});
