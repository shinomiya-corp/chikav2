import { Logger } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../common/embeds';
import { MediaType } from '../generated/graphql';
import { anilist } from './graphql/aniListClient';
import { mangaInfoEmbed } from './manga.embed';

const logger = new Logger('manga');

export async function mangaWorker(interaction: CommandInteraction) {
  const search = interaction.options.get('search');
  if (typeof search?.value !== 'string') {
    sendErrorEmbed(interaction);
    return;
  }
  const res = await anilist
    .manga({
      search: search.value,
      type: MediaType.Manga,
    })
    .catch((err) => {
      logger.error(err);
      return null;
    });

  if (!res?.Media) {
    sendErrorEmbed(
      interaction,
      `I couldn't find **${search.value}** on AniList.`,
    );
    return;
  }
  interaction.reply({ embeds: [mangaInfoEmbed({ ...res.Media })] });
}
