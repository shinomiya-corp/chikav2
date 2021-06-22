import { ApplicationCommandData } from 'discord.js';
import { CommandGroup, ICommandExtra } from '../../common/types';
import { mangaWorker } from './manga.worker';

export const metadata: ApplicationCommandData = {
  name: 'manga',
  description: 'Search for a manga on AniList',
  options: [
    {
      name: 'search',
      description: "The manga's title",
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: mangaWorker,
};
