import { GraphQLClient } from 'graphql-request';

export const anilistClient = new GraphQLClient(process.env.ANILIST_SCHEMA);
