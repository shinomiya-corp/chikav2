import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../../generated/graphql';

const anilistClient = new GraphQLClient(process.env.ANILIST_SCHEMA);
export const anilist = getSdk(anilistClient);
