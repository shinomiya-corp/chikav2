import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, ICommandExtraData } from '../types';
import { animeWorker } from './anime.worker';

export const metadata: ApplicationCommandData = {
  name: 'anime',
  description: 'Search for an anime on AniList',
  options: [
    {
      name: 'search',
      description: 'Title of the anime to search for',
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: ICommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: animeWorker,
};
