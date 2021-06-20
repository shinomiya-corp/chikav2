import { ApplicationCommandData } from 'discord.js';
import { CommandCategory, CommandExtraData } from '../types';

export const metadata: ApplicationCommandData = {
  name: 'ping',
  description: 'Get a pong.',
};

export const data: CommandExtraData = {
  category: CommandCategory.UTILITY,
  worker: (interaction) => interaction.reply('pong'),
};
