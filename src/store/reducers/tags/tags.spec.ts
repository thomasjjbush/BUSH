import { tagReducer } from './tags';
import { TagActions } from '../../../types';

describe('tagReducer', () => {
    it(`should return correct state for ${TagActions.LOADED}`, () => {
        const tags = [
            { name: 'name-1', slug: 'slug-1' },
            { name: 'name-2', slug: 'slug-2' },
        ];
        expect(tagReducer([], { type: TagActions.LOADED, payload: tags })).toEqual(tags);
    });
});
