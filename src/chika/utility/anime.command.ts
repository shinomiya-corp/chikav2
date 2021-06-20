import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, CommandExtraData } from '../types';
import { animeWorker } from './anime.worker';

export const metadata: ApplicationCommandData = {
  name: 'anime',
  description: 'Search for an anime on AniList.',
  options: [
    {
      name: 'title',
      description: 'Title of the anime to search for.',
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: CommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: animeWorker,
};
