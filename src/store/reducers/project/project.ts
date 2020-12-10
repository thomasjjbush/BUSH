import { ProjectActions, ProjectState } from '../../../types';

type Payload = number | Partial<ProjectState>;

export const projectReducer = (
    state: ProjectState = {},
    action: { payload: Payload; type: ProjectActions },
): ProjectState => {
    switch (action.type) {
        case ProjectActions.CLEARED:
            return {};
        case ProjectActions.ERROR:
            return { ...state, error: action.payload as number };
        case ProjectActions.LOADED_PROJECT:
            return { ...state, ...(action.payload as Partial<ProjectState>) };
        default:
            return state;
    }
};
