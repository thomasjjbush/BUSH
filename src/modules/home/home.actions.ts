import { GraphQLClient } from 'graphql-request';
import { batch } from 'react-redux';
import { Dispatch } from 'redux';
import { ClientsActions, EmploymentActions, ProjectsActions, TagActions } from '../../types';
import { homePageQuery, projectsQuery } from './home.queries';

export const loadHomePage = (graphQL: GraphQLClient) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const { clients, employment, projects, tags } = await graphQL.request(homePageQuery);
        batch(() => {
            dispatch({ type: ClientsActions.LOADED, payload: clients.items });
            dispatch({ type: EmploymentActions.LOADED, payload: employment.items });
            dispatch({ type: ProjectsActions.LOADED, payload: projects });
            dispatch({ type: TagActions.LOADED, payload: tags.items });
        });
    } catch (e) {
        console.log(e);
    }
};

export const loadProjects = (
    graphQL: GraphQLClient,
    args: { client?: string; order?: string; search?: string; skip?: number },
) => async (dispatch: Dispatch): Promise<void> => {
    try {
        if (args.skip) dispatch({ type: ProjectsActions.LOADING_MORE });

        const { projects } = await graphQL.request(projectsQuery, args);

        dispatch({
            type: args.skip ? ProjectsActions.LOADED_MORE : ProjectsActions.LOADED,
            payload: projects,
        });
    } catch (e) {
        console.error(e);
    }
};
