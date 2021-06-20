import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, CommandExtraData } from '../types';
import { mangaWorker } from './manga.worker';

export const metadata: ApplicationCommandData = {
  name: 'manga',
  description: 'Search for a manga on AniList.',
  options: [
    {
      name: 'search',
      description: 'Title of the manga to search for.',
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: CommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: mangaWorker,
};
