import { ProjectsActions, ProjectsState } from '../../../types';

export const projectsReducer = (
    state: ProjectsState = { items: [] },
    { payload, type }: { payload: ProjectsState; type: ProjectsActions },
): ProjectsState => {
    switch (type) {
        case ProjectsActions.LOADED:
            return { ...state, ...payload };
        case ProjectsActions.LOADED_MORE:
            return {
                ...state,
                items: [...state.items, ...payload.items],
                loading: false,
                total: payload.total,
            };
        case ProjectsActions.LOADING_MORE:
            return { ...state, loading: true };
        default:
            return state;
    }
};
