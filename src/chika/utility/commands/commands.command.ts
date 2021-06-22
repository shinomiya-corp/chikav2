import { ApplicationCommandData } from 'discord.js';
import _ from 'lodash';
import { CommandGroup, ICommandExtra } from '../../common/types';
import { commandsWorker } from './commands.worker';

export const metadata: ApplicationCommandData = {
  name: 'commands',
  description: 'Usage info for commands',
  options: [
    {
      name: 'group',
      description: 'Specify a group of commands',
      type: 'STRING',
      choices: Object.keys(CommandGroup)
        .filter((key) => Number.isNaN(Number(key)))
        .map((group) => ({
          name: _.kebabCase(group),
          value: _.kebabCase(group),
        })),
    },
  ],
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: commandsWorker,
};
