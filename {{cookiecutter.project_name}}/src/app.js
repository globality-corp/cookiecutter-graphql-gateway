import { getContainer, setDefaults } from '@globality/nodule-config';
import '@globality/nodule-graphql';
// resolve graph dependencies
import './clients';
import './resolvers';
import './resources';
import './routers';
import './schema';


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
        configRouter,
        gqlRouter,
    } = getContainer('routers');

    // enable routers
    express.use('/api', apiRouter);
    express.use('/api', configRouter);
    express.use('/gql', gqlRouter);
    express.all('/*', notFound);

    return express;
}
