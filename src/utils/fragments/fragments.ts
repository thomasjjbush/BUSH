import { gql } from 'graphql-request';

export const clientFragment = gql`
    fragment ClientFragment on Clients {
        name
        primaryColor
        logo {
            url
        }
        slug
        url
    }
`;

export const projectFragment = gql`
    fragment ProjectFragment on Project {
        client {
            name
            primaryColor
            logo {
                url
            }
            slug
            url
        }
        name
        slug
        tags: tagsCollection(limit: 20) {
            items {
                name
                slug
            }
        }
    }
`;

export const similarFragment = gql`
    fragment SimilarFragment on Project {
        name
        slug
        hero {
            url
        }
    }
`;

export const tagFragment = gql`
    fragment TagFragemnt on Tag {
        name
        slug
    }
`;
