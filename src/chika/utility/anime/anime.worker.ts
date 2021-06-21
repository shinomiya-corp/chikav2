import { Logger } from '@nestjs/common';
import { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../../common/embeds';
import { MediaType } from '../../generated/graphql';
import { anilist } from '../graphql/aniListClient';
import { animeInfoEmbed } from './anime.embed';

const logger = new Logger('anime');

export async function animeWorker(interaction: CommandInteraction) {
  const search = interaction.options.get('search');
  if (typeof search?.value !== 'string') {
    sendErrorEmbed(interaction);
    return;
  }
  const res = await anilist
    .anime({
      search: search.value,
      type: MediaType.Anime,
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
  interaction.reply({ embeds: [animeInfoEmbed({ ...res.Media })] });
}
