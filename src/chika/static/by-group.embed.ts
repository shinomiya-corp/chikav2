import { ApplicationCommandData, Collection, MessageEmbed } from 'discord.js';
import _ from 'lodash';
import { commands } from '.';
import { baseEmbed } from '../common/embeds';
import { CommandGroup, ICommand } from '../common/types';

const groupEmbeds = genGroupEmbeds(commands);
export default groupEmbeds;

function genGroupEmbeds(
  commands: Collection<string, ICommand>,
): Collection<string, MessageEmbed> {
  const coll = new Collection<string, MessageEmbed>();
  const groups = sortCommandsToGroup(commands);
  groups.forEach((commands, group) =>
    coll.set(groupName(group, { kebab: true }), groupEmbed(commands, group)),
  );
  return coll;
}

function commandUsage(command: ApplicationCommandData) {
  return `/${command.name} ${
    command.options
      ?.map((option) =>
        option.required ? `<${option.name}>` : `[${option.name}]`,
      )
      .join(' ') || ''
  }`;
}

function groupEmbed(commands: ApplicationCommandData[], group: CommandGroup) {
  return baseEmbed()
    .setTitle(groupName(group))
    .addFields(
      commands.map((command) => ({
        name: commandUsage(command),
        value: command.description,
      })),
    );
}

function sortCommandsToGroup(
  commands: Collection<string, ICommand>,
): Collection<CommandGroup, ICommand[]> {
  const byGroup = new Collection<CommandGroup, ICommand[]>();
  commands.forEach((command) => {
    const group = byGroup.get(command.group);
    if (!group) {
      byGroup.set(command.group, [command]);
      return;
    }
    group.push(command);
  });
  return byGroup;
}

function groupName(group: CommandGroup, options?: { kebab: boolean }) {
  switch (group) {
    case CommandGroup.UTILITY:
      return options?.kebab ? 'utility' : ':satellite: Utility';
    default:
      return '';
  }
}
