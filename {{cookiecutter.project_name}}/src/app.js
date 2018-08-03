import { setDefaults, getContainer } from '@globality/nodule-config';
import '@globality/nodule-graphql';

// resolve graph dependencies
import './clients';
import './resolvers';
import './resources';
import './schema';
import './routers';


setDefaults('middleware.jwt', {
    realm: '{{cookiecutter.project_name}}',
});
setDefaults('routes.graphiql', {
    endpointUrl: '/gql/graphql',
});


export default function createApp() {
    const {
        express,
        notFound,
    } = getContainer('routes');
    const {
        apiRouter,
        gqlRouter,
    } = getContainer('routers');

    // enable routers
    express.use('/api', apiRouter);
    express.use('/gql', gqlRouter);
    express.all('/*', notFound);

    return express;
}
