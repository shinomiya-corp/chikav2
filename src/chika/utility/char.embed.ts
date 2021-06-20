import { baseEmbed } from '../common/embeds';
import {
  parseFuzzyDate,
  parseHtml,
  wrap,
} from '../common/helpers/typography.helper';
import { unknown_png } from '../common/resources';
import { CharacterQuery } from '../generated/graphql';
import { truncate } from '../common/helpers/typography.helper';

export const charInfoEmbed = (
  info: NonNullable<CharacterQuery['Character']>,
) => {
  const { name, image, gender, age, dateOfBirth, description, siteUrl } = info;
  let genderEmoji;
  switch (gender?.toLowerCase()) {
    case 'male':
      genderEmoji = ':male_sign:';
      break;
    case 'female':
      genderEmoji = ':female_sign:';
      break;
    default:
      genderEmoji = '';
      break;
  }

  return baseEmbed()
    .setTitle(`${name?.full || '?'} ${genderEmoji}\n${name?.native || '?'}`)
    .setDescription(characterDescription(description, siteUrl))
    .addFields([
      { name: ':calendar: Age', value: age || '?', inline: true },
      {
        name: ':cake: Birthday',
        value: parseFuzzyDate(dateOfBirth),
        inline: true,
      },
    ])
    .setImage(image?.large || unknown_png);
};

function characterDescription(
  desc: string | null | undefined,
  siteUrl: string | null | undefined,
) {
  if (!desc) return '*No description for this character.*';
  let body = truncate(parseHtml(desc), { len: 70, byWord: true });
  if (!siteUrl || body.length === desc.length) return body;
  body = `${wrap(`${body} [read more]`)}(${siteUrl})`;
  return body;
}
