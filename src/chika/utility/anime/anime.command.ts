import { ApplicationCommandData } from 'discord.js';
import { CommandGroup, ICommandExtra } from '../../types';
import { animeWorker } from './anime.worker';

export const metadata: ApplicationCommandData = {
  name: 'anime',
  description: 'Search for an anime on AniList',
  options: [
    {
      name: 'search',
      description: "The anime's title",
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: animeWorker,
};
