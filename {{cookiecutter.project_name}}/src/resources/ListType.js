import { GraphQLObjectType, GraphQLList } from 'graphql';

function ListType(type) {
    return new GraphQLObjectType({
        name: `ListType${type.name}`,
        fields: {
            items: {
                type: GraphQLList(type),
            },
        },
    });
}

export default ListType;

