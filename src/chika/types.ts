import { ApplicationCommandData, CommandInteraction } from 'discord.js';

export interface CommandExtraData {
  worker: (interaction: CommandInteraction) => void;
  category: CommandCategory;
}

export enum CommandCategory {
  UTILITY,
}

export type Command = ApplicationCommandData & CommandExtraData;
