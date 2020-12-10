import { Client, ClientsActions } from '../../../types';

export const clientsReducer = (state: Client[] = [], action: { payload: Client[]; type: ClientsActions }): Client[] => {
    switch (action.type) {
        case ClientsActions.LOADED:
            return action.payload;
        default:
            return state;
    }
};
