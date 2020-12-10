import { clientsReducer } from './clients';
import { ClientsActions } from '../../../types';

// it.each`
//     expectedState             | initialState | payload                   | type
//     ${[{ name: 'client-1' }]} | ${[]}        | ${[{ name: 'client-1' }]} | ${ClientsActions.LOADED}
// `('should return correct state for $action', ({ expectedState, initialState, payload, type }) => {
//     expect(clientsReducer(initialState, { type, payload })).toEqual(expectedState);
// });

describe('clientsReducer', () => {
    it(`should return correct state for ${ClientsActions.LOADED}`, () => {
        const client = {
            logo: {
                url: 'url',
            },
            name: 'name',
            primaryColor: 'primaryColor',
            slug: 'slug',
            url: 'url',
        };
        expect(clientsReducer([], { type: ClientsActions.LOADED, payload: [client] })).toEqual([client]);
    });
});
