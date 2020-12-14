import React, { FunctionComponent, ReactElement } from 'react';
import { mount } from 'enzyme';
import { client, GraphQLContext, useGraphQL } from './graphql-context';
import { GraphQLClient } from 'graphql-request';

describe('graphql context', () => {
    describe('client', () => {
        it('should create instance of GraphQLClient using correct arguments', () => {
            expect(client).toEqual({
                options: { headers: { Authorization: 'Bearer process.env.CONTENT_ACCESS_TOKEN' } },
                url:
                    'https://graphql.contentful.com/content/v1/spaces/e85zpqq4b2pc/environments/process.env.CONTENT_ENVIRONMENT',
            });
        });
    });

    describe('useGraphQL & GraphQLContext', () => {
        it('should return correct context', () => {
            const MockComponent: FunctionComponent = (): ReactElement => {
                const result = useGraphQL();
                return <div>{JSON.stringify(result)}</div>;
            };
            const wrapper = mount(
                <GraphQLContext.Provider value={new GraphQLClient('mockURL')}>
                    <MockComponent />
                </GraphQLContext.Provider>,
            );
            expect(JSON.parse(wrapper.find('div').text())).toEqual({ url: 'mockURL', options: {} });
        });
    });
});
