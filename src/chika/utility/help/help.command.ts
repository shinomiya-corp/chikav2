import { ApplicationCommandData, CommandInteraction } from 'discord.js';
import { CommandGroup, ICommandExtra } from '../../types';
import { helpOptions } from './help.options';

export const metadata: ApplicationCommandData = {
  name: 'help',
  description: 'Usage info for commands',
  options: helpOptions,
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: (interaction: CommandInteraction) => {
    console.log({ interaction });
    console.log('options: ', interaction.options.get('group'));
  },
};
