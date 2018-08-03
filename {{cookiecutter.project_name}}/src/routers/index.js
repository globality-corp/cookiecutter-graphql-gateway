import bodyParser from 'body-parser';
import { Router } from 'express';

import { bind, getContainer } from '@globality/nodule-config';

bind('routers.apiRouter', () => {
    const { health } = getContainer('routes');
    const router = new Router();

    router.get('/health', health);
    return router;
});

bind('routers.gqlRouter', () => {
    const { graphql, graphiql, health } = getContainer('routes');
    const {
        jwt,
        passBasicAuth,
        logging,
    } = getContainer('middleware');
    const router = new Router();

    router.get('/health', health);

    const parseJson = bodyParser.json();

    router.use(
        '/graphql',
        jwt,
        logging,
        parseJson,
        graphql,
    );

    if (graphiql) {
        router.use(
            '/graphiql',
            passBasicAuth,
            jwt,
            logging,
            parseJson,
            graphiql,
        );
    }

    return router;
});
