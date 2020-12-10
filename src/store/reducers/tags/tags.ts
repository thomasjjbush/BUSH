import { TagActions, Tag } from '../../../types';

export const tagReducer = (state: Tag[] = [], action: { payload: Tag[]; type: TagActions }): Tag[] => {
    switch (action.type) {
        case TagActions.LOADED:
            return [...action.payload];
        default:
            return state;
    }
};
