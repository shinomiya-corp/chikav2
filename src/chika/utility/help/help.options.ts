import { ApplicationCommandOption } from 'discord.js';
import _ from 'lodash';
import { CommandGroup } from '../../types';

export const helpOptions: ApplicationCommandOption[] = [
  {
    name: 'all',
    description: 'All commands',
    type: 'SUB_COMMAND',
  },
  {
    name: 'group',
    description: 'Specify a group',
    type: 'SUB_COMMAND',
    options: [
      {
        name: 'group',
        description: 'The group to check',
        type: 'STRING',
        required: true,
        choices: Object.keys(CommandGroup)
          .filter((val) => Number.isNaN(Number(val)))
          .map((grp) => ({
            name: _.kebabCase(grp),
            value: _.kebabCase(grp),
          })),
      },
    ],
  },
  {
    name: 'one',
    description: 'Specify a single command',
    type: 'SUB_COMMAND',
    options: [
      {
        name: 'search',
        description: 'Name of the command',
        type: 'STRING',
        required: true,
      },
    ],
  },
];
