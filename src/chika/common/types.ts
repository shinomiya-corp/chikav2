import type {
  ApplicationCommandData,
  Collection,
  CommandInteraction,
  MessageEmbed,
} from 'discord.js';

export interface ICommandExtra {
  worker: (interaction: CommandInteraction, context: IChikaContext) => void;
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

export interface IChikaContext {
  groupEmbeds: Collection<string, MessageEmbed>;
}
