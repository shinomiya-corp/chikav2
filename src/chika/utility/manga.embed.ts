import _ from 'lodash';
import { baseEmbed } from '../common/embeds';
import { parseFuzzyDate, parseHtml } from '../common/helpers/typography.helper';
import { unknown_png } from '../common/resources';
import { MangaQuery } from '../generated/graphql';

export function mangaInfoEmbed(info: NonNullable<MangaQuery['Media']>) {
  const {
    coverImage,
    title,
    description,
    status,
    genres,
    source,
    averageScore,
    startDate,
    endDate,
    chapters,
    volumes,
  } = info;

  return baseEmbed()
    .setThumbnail(coverImage?.medium || unknown_png)
    .setTitle(title?.userPreferred || 'Untitled')
    .setDescription(
      description ? parseHtml(description) : `*No description for this manga.*`,
    )
    .addFields([
      {
        name: ':pencil: Status',
        value: status
          ? _.startCase(status.replace(/_/g, ' ').toLowerCase())
          : '?',
        inline: true,
      },
      {
        name: ':calendar: Published',
        value: `From **${parseFuzzyDate(startDate)}** to **${parseFuzzyDate(
          endDate,
        )}**`,
        inline: true,
      },
      {
        name: ':ramen: Sauce',
        value: source
          ? _.startCase(source.replace(/_/g, ' ').toLowerCase())
          : '?',
        inline: true,
      },
    ])
    .addField(':shinto_shrine: Genres', genres?.join(', ') || ':question:')
    .addFields([
      {
        name: ':books: Volumes',
        value: volumes?.toString() || '?',
        inline: true,
      },
      {
        name: ':newspaper2: Chapters',
        value: chapters?.toString() || '?',
        inline: true,
      },
      {
        name: ':star: Rating',
        value: averageScore ? `${averageScore}/100` : '?',
        inline: true,
      },
    ]);
}
