import {
  ApplicationCommandData,
  CommandInteraction,
  MessageEmbed,
} from 'discord.js';

export interface ICommandExtra {
  worker: (interaction: CommandInteraction) => void;
  group: CommandGroup;
}

export interface ICommandInfo {
  usage: string;
  embed: MessageEmbed;
}

export enum CommandGroup {
  UTILITY,
}

export type ICommand = ApplicationCommandData & ICommandExtra;
