import { Logger } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../common/embeds';
import { anilist } from './graphql/aniListClient';
import { charInfoEmbed } from './char.embed';

const logger = new Logger('anime');

export async function charWorker(interaction: CommandInteraction) {
  const search = interaction.options.get('search');
  if (typeof search?.value !== 'string') {
    sendErrorEmbed(interaction);
    return;
  }
  const res = await anilist
    .character({
      charName: search.value,
    })
    .catch((err) => {
      logger.error(err);
      return null;
    });
  if (!res?.Character) {
    sendErrorEmbed(
      interaction,
      `I couldn't find **${search.value}** on AniList.`,
    );
    return;
  }
  interaction.reply({ embeds: [charInfoEmbed({ ...res.Character })] });
}
