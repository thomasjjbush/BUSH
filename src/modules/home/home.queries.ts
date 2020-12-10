import { gql } from 'graphql-request';
import { clientFragment, projectFragment, tagFragment } from '../../utils';

export const homePageQuery = gql`
    query {
        clients: clientsCollection(order: [name_ASC]) {
            items {
                ...ClientFragment
            }
        }
        employment: employmentCollection(order: [startDate_DESC]) {
            items {
                companyName
                endDate
                location {
                    lon
                    lat
                }
                responsibilities
                startDate
                title
                url
            }
        }
        projects: projectCollection(limit: 4, order: [year_DESC]) {
            items {
                ...ProjectFragment
                thumbnail {
                    url
                }
            }
            total
        }
        tags: tagCollection(order: [name_ASC]) {
            items {
                ...TagFragemnt
            }
        }
    }
    ${clientFragment}
    ${projectFragment}
    ${tagFragment}
`;

export const projectsQuery = gql`
    query($client: String = "", $order: ProjectOrder = year_DESC, $search: String = "", $skip: Int = 0) {
        projects: projectCollection(
            limit: 4
            order: [$order]
            skip: $skip
            where: { AND: [{ client: { name_contains: $client } }, { name_contains: $search }] }
        ) {
            items {
                ...ProjectFragment
                thumbnail {
                    url
                }
            }
            total
        }
    }
    ${projectFragment}
`;
