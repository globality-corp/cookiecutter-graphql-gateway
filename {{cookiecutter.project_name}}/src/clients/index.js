import { bind } from '@globality/nodule-config';
import { createOpenAPIClient } from '@globality/nodule-openapi';

import specs from './specs';


Object.keys(specs).forEach((name) => {
    bind(`clients.${name}`, () => createOpenAPIClient(name, specs[name]));
});
