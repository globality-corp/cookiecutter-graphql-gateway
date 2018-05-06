import { GraphQLSchema } from 'graphql';

import { bind } from '@globality/nodule-config';


bind('graphql.schema', ({ QueryType }) => new GraphQLSchema({
    query: QueryType,
}));
