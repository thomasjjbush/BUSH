import { projectReducer } from './project';
import { ProjectActions } from '../../../types';

const item = {
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
};

describe('projectReducer', () => {
    it.each`
        expectedState                | initialState      | payload                | type
        ${{}}                        | ${{ error: 500 }} | ${undefined}           | ${ProjectActions.CLEARED}
        ${{ error: 500 }}            | ${{}}             | ${500}                 | ${ProjectActions.ERROR}
        ${{ item, sameTag: [item] }} | ${{ item }}       | ${{ sameTag: [item] }} | ${ProjectActions.LOADED_PROJECT}
    `('should return correct state for $type', ({ expectedState, initialState, payload, type }) => {
        expect(projectReducer(initialState, { type, payload })).toEqual(expectedState);
    });
});
