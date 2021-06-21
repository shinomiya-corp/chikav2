import { ApplicationCommandData } from 'discord.js';
import { CommandGroup, ICommandExtra } from '../types';

export const metadata: ApplicationCommandData = {
  name: 'ping',
  description: 'Get a pong',
};

export const data: ICommandExtra = {
  group: CommandGroup.UTILITY,
  worker: (interaction) => interaction.reply('pong'),
};
