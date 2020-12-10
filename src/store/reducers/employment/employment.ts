import { Employment, EmploymentActions } from '../../../types';

export const employmentReducer = (
    state: Employment[] = [],
    action: { payload: Employment[]; type: EmploymentActions },
): Employment[] => {
    switch (action.type) {
        case EmploymentActions.LOADED:
            return action.payload;
        default:
            return state;
    }
};
