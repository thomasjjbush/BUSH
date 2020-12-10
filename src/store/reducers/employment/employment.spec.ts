import { employmentReducer } from './employment';
import { EmploymentActions } from '../../../types';

describe('employmentReducer', () => {
    it(`should return correct state for ${EmploymentActions.LOADED}`, () => {
        const employment = {
            companyName: 'companyName',
            location: {
                lat: 'lat',
                lon: 'lon',
            },
            responsibilities: 'responsibilities',
            startDate: 'startDate',
            title: 'title',
            url: 'url',
        };
        expect(employmentReducer([], { type: EmploymentActions.LOADED, payload: [employment] })).toEqual([employment]);
    });
});
