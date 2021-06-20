import { ApplicationCommandData, CommandInteraction } from 'discord.js';

export interface ICommandExtraData {
  worker: (interaction: CommandInteraction) => void;
  category: CommandCategory;
}

export enum CommandCategory {
  UTILITY,
}

export type ICommand = ApplicationCommandData & ICommandExtraData;
