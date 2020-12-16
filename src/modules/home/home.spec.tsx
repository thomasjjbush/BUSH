import { ReactNode } from 'react';
import { ReactWrapper } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Home from './home';
import { loadHomePage, loadProjects } from './home.actions';
import { Input, Select } from './home.styles';
import { Scroller } from '../../components';
import { renderModule } from '../../test-utils/render-module/render-module';

jest.mock('../../utils', () => ({
    ...jest.requireActual('../../utils'),
    useGraphQL: jest.fn().mockReturnValue('graphQLContext'),
}));

jest.mock('./home.actions', () => ({
    loadHomePage: jest.fn().mockReturnValue({ type: 'MOCK_LOAD_HOME_PAGE' }),
    loadProjects: jest.fn().mockReturnValue({ type: 'MOCK_LOAD_PROJECTS' }),
}));

jest.mock('../../components', () => ({
    Client: (): string => '',
    Scroller: ({ children }: { children: ReactNode[] }): ReactNode => children as ReactNode,
    Tags: (): string => '',
    Thumbnail: (): string => '',
}));

describe('Home', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should match snapshot', () => {
        expect(renderModule(Home).find(Home)).toMatchSnapshot();
    });

    it('should invoke loadHomePage on mount', () => {
        renderModule(Home);
        expect(loadHomePage).toHaveBeenCalledTimes(1);
    });

    it.each`
        action             | component | expectedArgs                                          | initialState   | selector
        ${'search input'}  | ${Input}  | ${{ client: '', order: 'year_DESC', search: 'xoxo' }} | ${''}          | ${'first'}
        ${'order select'}  | ${Select} | ${{ client: '', order: 'xoxo', search: '' }}          | ${'year_DESC'} | ${'first'}
        ${'client select'} | ${Select} | ${{ client: 'xoxo', order: 'year_DESC', search: '' }} | ${''}          | ${'last'}
    `(
        'should update state and dispatch action on $action chane',
        ({
            component,
            expectedArgs,
            initialState,
            selector,
        }: {
            component: ReactWrapper;
            expectedArgs: Record<string, string>;
            initialState: string;
            selector: 'first' | 'last';
        }) => {
            const wrapper = renderModule(Home);
            const elem = wrapper.find(component)[selector]();
            expect(elem.prop('value')).toBe(initialState);

            act(() => {
                elem.prop('onChange')({ target: { value: 'xoxo' } });
            });
            wrapper.update();

            expect(
                wrapper
                    .find(component)
                    [selector]()
                    .prop('value'),
            ).toBe('xoxo');
            expect(loadProjects).toHaveBeenCalledTimes(1);
            expect(loadProjects).toHaveBeenCalledWith('graphQLContext', expectedArgs);
        },
    );

    it('should load more projects on click', () => {
        const wrapper = renderModule(Home);
        wrapper
            .find(Scroller)
            .last()
            .prop('loadMore')();

        expect(loadProjects).toHaveBeenCalledTimes(1);
        expect(loadProjects).toHaveBeenCalledWith('graphQLContext', {
            client: '',
            order: 'year_DESC',
            search: '',
            skip: 1,
        });
    });
});
