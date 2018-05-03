import { GraphQLObjectType } from 'graphql';

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'Top-level content queries',
    fields: {
    },
});

export default QueryType;
