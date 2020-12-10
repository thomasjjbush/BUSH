import { gql } from 'graphql-request';
import { projectFragment, similarFragment } from '../../utils';

export const loadProjectQuery = gql`
    query($slug: String!) {
        projects: projectCollection(where: { slug: $slug }) {
            items {
                ...ProjectFragment
                description
                gallery: galleryCollection(limit: 10) {
                    items {
                        url
                    }
                    total
                }
                hero {
                    url
                }
                primaryTag {
                    name
                    slug
                }
                responsibilities: responsibilitiesCollection(limit: 10) {
                    items {
                        description
                        icon
                        name
                    }
                }
                video {
                    url
                }
                year
            }
        }
    }
    ${projectFragment}
`;

export const loadSimilarQuery = gql`
    query($client: String!, $slug: String!, $tag: String!) {
        sameClient: projectCollection(limit: 3, where: { client: { slug: $client }, slug_not: $slug }) {
            items {
                ...SimilarFragment
            }
        }
        sameTag: projectCollection(
            limit: 3
            where: { client: { slug_not: $client }, primaryTag: { slug: $tag }, slug_not: $slug }
        ) {
            items {
                ...SimilarFragment
                client {
                    primaryColor
                    logo {
                        url
                    }
                }
            }
        }
    }
    ${similarFragment}
`;
