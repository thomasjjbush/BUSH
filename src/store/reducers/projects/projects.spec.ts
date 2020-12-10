import { projectsReducer } from './projects';
import { ProjectsActions } from '../../../types';

const projects = {
    items: [
        {
            client: 'client',
            description: 'description',
            hero: {
                name: 'name',
                url: 'url',
            },
            name: 'name',
            responsibilities: {
                items: [
                    {
                        description: 'description',
                        icon: 'icon',
                        name: 'name',
                    },
                ],
                total: 0,
            },
            slug: 'slug',
            tags: {
                items: [
                    {
                        name: 'name',
                        slug: 'slug',
                    },
                ],
                total: 0,
            },
            thumbnail: 'thumbnail',
            video: 'video',
            year: 'year',
        },
    ],
    total: 1,
};

describe('projectsReducer', () => {
    it.each`
        expectedState                                                                  | initialState          | payload                      | type
        ${projects}                                                                    | ${{}}                 | ${projects}                  | ${ProjectsActions.LOADED}
        ${{ loading: false, items: [projects.items[0], projects.items[0]], total: 2 }} | ${projects}           | ${{ ...projects, total: 2 }} | ${ProjectsActions.LOADED_MORE}
        ${{ loading: true }}                                                           | ${{ loading: false }} | ${undefined}                 | ${ProjectsActions.LOADING_MORE}
    `('should return correct state for $type', ({ expectedState, initialState, payload, type }) => {
        expect(projectsReducer(initialState, { type, payload })).toEqual(expectedState);
    });
});
