import { CommandInteraction, Message, MessageEmbed } from 'discord.js';
import { chika_pink } from './resources';

export function baseEmbed() {
  return new MessageEmbed().setColor(chika_pink);
}
export function sendBaseEmbed(
  ctxOrInteraction: Message | CommandInteraction,
  m: string,
) {
  return ctxOrInteraction.reply({ embeds: [baseEmbed().setDescription(m)] });
}

export const defaultErrorMessage = `:broken_heart: Oops...I couldn't handle that request.`;
export function errorEmbed(m?: string) {
  return baseEmbed().setDescription(
    m ? `:broken_heart: ${m}` : defaultErrorMessage,
  );
}
export function sendErrorEmbed(
  ctxOrInteraction: Message | CommandInteraction,
  m?: string,
) {
  return ctxOrInteraction.reply({
    embeds: [
      baseEmbed().setDescription(
        m ? `:broken_heart: ${m}` : defaultErrorMessage,
      ),
    ],
  });
}
