import { GraphQLClient } from 'graphql-request';
import { MockStoreEnhanced } from 'redux-mock-store';
import { mockStore } from '../../test-utils/mock-store/mock-store';
import { loadProject } from './project.actions';
import { loadProjectQuery, loadSimilarQuery } from './project.queries';

jest.mock('../../utils', () => ({
    ...jest.requireActual('../../utils'),
    isImageLandscape: jest.fn().mockResolvedValue(true),
}));

describe('Project', () => {
    describe('Project actions', () => {
        const graphQL: Partial<GraphQLClient> = {};
        let store: MockStoreEnhanced;

        beforeEach(() => {
            store = mockStore();
        });

        const requestHelper = (projectRes?: any, similarRes?: any): any => (_: any, args: any): any => {
            if (args.client && args.slug && args.tag) {
                return similarRes || { sameClient: { items: ['sameClient'] }, sameTag: { items: ['sameTag'] } };
            }
            return (
                projectRes || {
                    projects: {
                        items: [
                            {
                                client: { slug: 'x' },
                                gallery: { items: [{ url: 'y' }] },
                                primaryTag: { slug: 'z' },
                            },
                        ],
                    },
                }
            );
        };

        it('should dispatch correct action if both queries are successful', async () => {
            graphQL.request = jest.fn(requestHelper());
            await store.dispatch<any>(loadProject(graphQL as GraphQLClient, 'y'));

            expect(graphQL.request).toHaveBeenNthCalledWith(1, loadProjectQuery, { slug: 'y' });
            expect(graphQL.request).toHaveBeenNthCalledWith(2, loadSimilarQuery, { client: 'x', slug: 'y', tag: 'z' });
            expect(store.getActions()).toEqual([
                {
                    payload: {
                        item: {
                            client: {
                                slug: 'x',
                            },
                            gallery: {
                                isLandScape: true,
                                items: [
                                    {
                                        url: 'y',
                                    },
                                ],
                            },
                            primaryTag: {
                                slug: 'z',
                            },
                        },
                        sameClient: ['sameClient'],
                        sameTag: ['sameTag'],
                    },
                    type: 'project/LOADED',
                },
            ]);
        });

        it('should dispatch correct 404 error action if no items are returned from first query', async () => {
            graphQL.request = jest.fn().mockResolvedValue({ projects: { items: [] } });
            await store.dispatch<any>(loadProject(graphQL as GraphQLClient, 'slug'));

            expect(graphQL.request).toHaveBeenCalledWith(loadProjectQuery, { slug: 'slug' });
            expect(store.getActions()).toEqual([{ payload: 404, type: 'project/ERROR' }]);
        });

        it('should dispatch correct 500 error action if first query throws', async () => {
            graphQL.request = jest.fn().mockRejectedValue(new Error());
            await store.dispatch<any>(loadProject(graphQL as GraphQLClient, 'slug'));

            expect(store.getActions()).toEqual([{ payload: 500, type: 'project/ERROR' }]);
        });

        it('should dispatch correct 500 error action if second query throws', async () => {
            graphQL.request = jest.fn(requestHelper(null, new Error()));
            await store.dispatch<any>(loadProject(graphQL as GraphQLClient, 'slug'));

            expect(graphQL.request).toHaveBeenCalledTimes(2);
            expect(store.getActions()).toEqual([{ payload: 500, type: 'project/ERROR' }]);
        });
    });
});
