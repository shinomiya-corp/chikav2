import _ from 'lodash';
import { baseEmbed } from '../common/embeds';
import { parseHtml } from '../common/helpers/typography';
import { unknown_png } from '../common/resources';
import { AnimeQuery } from '../generated/graphql';

export function animeInfoEmbed(info: NonNullable<AnimeQuery['Media']>) {
  const {
    averageScore,
    coverImage,
    title,
    description,
    episodes,
    status,
    genres,
    source,
    season,
    seasonYear,
  } = info;

  return baseEmbed()
    .setThumbnail(coverImage?.medium || unknown_png)
    .setTitle(title?.userPreferred || 'Untitled')
    .setDescription(
      description ? parseHtml(description) : `*No description for this anime.*`,
    )
    .addFields([
      {
        name: ':film_frames: Status',
        value: status ? _.capitalize(status.replace(/_/g, ' ')) : '?',
        inline: true,
      },
      {
        name: ':cherry_blossom: Season',
        value:
          seasonYear && season
            ? `${_.startCase(season.toLowerCase())} ${seasonYear}`
            : '?',
        inline: true,
      },
    ])
    .addField(':shinto_shrine: Genres', genres?.join(', ') || ':question:')
    .addFields([
      {
        name: ':tv: Episodes',
        value: `${episodes || '?'}`,
        inline: true,
      },
      {
        name: ':star: Rating',
        value: averageScore ? `${averageScore}/100` : '?',
        inline: true,
      },
      {
        name: ':ramen: Sauce',
        value: source
          ? _.startCase(source.replace(/_/g, ' ').toLowerCase())
          : '?',
        inline: true,
      },
    ]);
}
