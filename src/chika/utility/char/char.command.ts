import { ApplicationCommandData } from 'discord.js';
import { CommandGroup, ICommandExtra } from '../../common/types';
import { charWorker } from './char.worker';

export const metadata: ApplicationCommandData = {
  name: 'char',
  description: 'Search for a character on AniList',
  options: [
    {
      name: 'search',
      description: "The character's name",
      type: 'STRING',
      required: true,
    },
  ],
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: charWorker,
};
