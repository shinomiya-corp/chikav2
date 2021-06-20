import { Intents } from 'discord.js';
import { Chika } from './chika';

function bootstrap() {
  Chika.start({
    intents: [Intents.FLAGS.GUILD_MESSAGES],
  });
}

bootstrap();
