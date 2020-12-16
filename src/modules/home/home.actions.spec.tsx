import { MockStoreEnhanced } from 'redux-mock-store';
import { GraphQLClient } from 'graphql-request';
import { mockStore } from '../../test-utils/mock-store/mock-store';
import { loadHomePage, loadProjects } from './home.actions';
import { homePageQuery, projectsQuery } from './home.queries';

jest.mock('../../utils', () => ({
    ...jest.requireActual('../../utils'),
    useGraphQL: jest.fn().mockReturnValueOnce('x'),
}));

describe('Home actions', () => {
    const graphQL: Partial<GraphQLClient> = {};
    let store: MockStoreEnhanced;

    beforeEach(() => {
        store = mockStore();
    });

    describe('loadHomePage', () => {
        it('should dispatch correct actions if query is successful', async () => {
            graphQL.request = jest.fn().mockResolvedValue({
                clients: { items: ['clients'] },
                employment: { items: ['employment'] },
                projects: { items: ['projects'] },
                tags: { items: ['tags'] },
            });
            await store.dispatch<any>(loadHomePage(graphQL as GraphQLClient));

            expect(graphQL.request).toHaveBeenCalledTimes(1);
            expect(graphQL.request).toHaveBeenCalledWith(homePageQuery);
            expect(store.getActions()).toEqual([
                { type: 'clients/LOADED', payload: ['clients'] },
                { type: 'employment/LOADED', payload: ['employment'] },
                { type: 'projects/LOADED', payload: { items: ['projects'] } },
                { type: 'tag/LOADED', payload: ['tags'] },
            ]);
        });
    });

    describe('loadProjects', () => {
        it('should dispatch correct actions if skip argument is provided', async () => {
            graphQL.request = jest.fn().mockResolvedValue({ projects: { items: [2], total: 2 } });
            await store.dispatch<any>(loadProjects(graphQL as GraphQLClient, { skip: 1 }));

            expect(graphQL.request).toHaveBeenCalledTimes(1);
            expect(graphQL.request).toHaveBeenCalledWith(projectsQuery, { skip: 1 });
            expect(store.getActions()).toEqual([
                { type: 'projects/LOADING_MORE' },
                { type: 'projects/LOADED_MORE', payload: { items: [2], total: 2 } },
            ]);
        });

        it('should dispatch correct actions if skip argument resolves to false', async () => {
            graphQL.request = jest.fn().mockResolvedValue({ projects: { items: ['x'], total: 33 } });
            await store.dispatch<any>(loadProjects(graphQL as GraphQLClient, {}));

            expect(graphQL.request).toHaveBeenCalledTimes(1);
            expect(graphQL.request).toHaveBeenCalledWith(projectsQuery, { skip: undefined });
            expect(store.getActions()).toEqual([{ type: 'projects/LOADED', payload: { items: ['x'], total: 33 } }]);
        });
    });
});
