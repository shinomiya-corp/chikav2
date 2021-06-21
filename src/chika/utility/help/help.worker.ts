import { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../../common/embeds';

export function helpWorker(interaction: CommandInteraction) {
  const option = interaction.options.first();
  if (!option) {
    sendErrorEmbed(interaction);
    return;
  }

  switch (option.value) {
    case 'all':
      toAllHelp(interaction);
      break;
    case 'group':
      toGroupHelp(interaction);
      break;
    case 'one':
      toOneHelp(interaction);
      break;
    default:
      toAllHelp(interaction);
      break;
  }
}

function toAllHelp(interaction: CommandInteraction) {}
function toGroupHelp(interaction: CommandInteraction) {}
function toOneHelp(interaction: CommandInteraction) {}
