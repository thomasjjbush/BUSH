import { createContext, Context, useContext } from 'react';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}`,
    { headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` } },
);

export const GraphQLContext: Context<GraphQLClient> = createContext(client);

export const useGraphQL = (): GraphQLClient => useContext(GraphQLContext);
