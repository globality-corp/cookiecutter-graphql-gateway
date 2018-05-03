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


export default function createApp() {
    const {
        express,
        notFound,
    } = getContainer('routes');
    const {
        apiRouter,
        contentRouter,
    } = getContainer('routers');

    // enable routers
    express.use('/api', apiRouter);
    express.use('/content', contentRouter);
    express.all('/*', notFound);

    return express;
}
