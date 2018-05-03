import { bind } from '@globality/nodule-config';

import QueryType from './queries';


bind('graphql.QueryType', () => QueryType);
