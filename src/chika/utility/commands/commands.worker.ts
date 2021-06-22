import type { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../../common/embeds';
import type { IChikaContext } from '../../common/types';

export function commandsWorker(
  interaction: CommandInteraction,
  ctx: IChikaContext,
) {
  const { options } = interaction;
  const group = options.get('group')?.value;
  if (!group) {
    interaction.reply({ embeds: ctx.groupEmbeds.array() });
    return;
  }
  const embedForGroup = ctx.groupEmbeds.get(group as string);
  if (!embedForGroup) {
    sendErrorEmbed(interaction, `Group **${group}** doesn't exist!`);
    return;
  }
  interaction.reply({ embeds: [embedForGroup] });
}
