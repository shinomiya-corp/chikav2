import { CommandInteraction } from 'discord.js';
import { sendErrorEmbed } from '../common/embeds';
import { getSdk, MediaType } from '../generated/graphql';
import { animeInfoEmbed } from './anime.embed';
import { anilistClient } from './graphql/aniListClient';

export async function animeWorker(interaction: CommandInteraction) {
  const title = interaction.options.get('title');
  if (typeof title?.value !== 'string') {
    sendErrorEmbed(interaction);
    return;
  }
  const anilist = getSdk(anilistClient);
  const res = await anilist.anime({
    search: title.value,
    type: MediaType.Anime,
  });
  if (!res.Media) {
    sendErrorEmbed(
      interaction,
      `I couldn't find **${title.value}** in AniList.`,
    );
    return;
  }
  // if (!(interaction.channel as TextChannel).nsfw && res.Media.isAdult) {
  //   sendErrorEmbed(
  //     interaction,
  //     `Woah, this anime is 18+, please go to a NSFW channel.`,
  //   );
  //   return;
  // }
  interaction.reply({ embeds: [animeInfoEmbed({ ...res.Media })] });
}
