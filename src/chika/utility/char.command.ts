import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, ICommandExtraData } from '../types';
import { charWorker } from './char.worker';

export const metadata: ApplicationCommandData = {
  name: 'char',
  description: 'Search for a character on AniList',
  options: [
    {
      name: 'search',
      description: 'Name of the character to search for',
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: ICommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: charWorker,
};
