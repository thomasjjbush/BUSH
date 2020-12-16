import { GraphQLClient } from 'graphql-request';
import { Dispatch } from 'redux';
import { ProjectActions } from '../../types';
import { isImageLandscape } from '../../utils';
import { loadProjectQuery, loadSimilarQuery } from './project.queries';

export const loadProject = (graphQL: GraphQLClient, slug: string) => async (dispatch: Dispatch): Promise<void> => {
    try {
        const { projects } = await graphQL.request(loadProjectQuery, { slug });

        if (!projects.items.length) {
            dispatch({ type: ProjectActions.ERROR, payload: 404 });
            return;
        }

        const { slug: client } = projects.items[0].client;
        const { slug: tag } = projects.items[0].primaryTag;

        const { sameClient, sameTag } = await graphQL.request(loadSimilarQuery, { client, slug, tag });
        const isLandScape = await isImageLandscape(projects.items[0].gallery.items?.[0]?.url);

        dispatch({
            type: ProjectActions.LOADED_PROJECT,
            payload: {
                item: { ...projects.items[0], gallery: { ...projects.items[0].gallery, isLandScape } },
                sameClient: sameClient.items,
                sameTag: sameTag.items,
            },
        });
    } catch (err) {
        dispatch({ type: ProjectActions.ERROR, payload: 500 });
    }
};
