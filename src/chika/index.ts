import { Intents } from 'discord.js';
import { Chika } from './chika';

function bootstrap() {
  Chika.up({
    intents: [Intents.FLAGS.GUILD_MESSAGES],
  });
}

bootstrap();
