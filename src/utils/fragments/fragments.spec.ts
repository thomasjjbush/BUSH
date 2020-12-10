import { clientFragment, projectFragment, similarFragment, tagFragment } from './fragments';

describe('fragments', () => {
    describe('clientFragment', () => {
        it('should match snapshot', () => {
            expect(clientFragment).toMatchSnapshot();
        });
    });

    describe('projectFragment', () => {
        it('should match snapshot', () => {
            expect(projectFragment).toMatchSnapshot();
        });
    });

    describe('similarFragment', () => {
        it('should match snapshot', () => {
            expect(similarFragment).toMatchSnapshot();
        });
    });

    describe('tagFragmemt', () => {
        it('should match snapshot', () => {
            expect(tagFragment).toMatchSnapshot();
        });
    });
});
