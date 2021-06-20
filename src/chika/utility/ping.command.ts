import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, ICommandExtraData } from '../types';

export const metadata: ApplicationCommandData = {
  name: 'ping',
  description: 'Get a pong.',
};

export const data: ICommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: (interaction) => interaction.reply('pong'),
};
