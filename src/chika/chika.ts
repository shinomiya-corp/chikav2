import { Logger } from '@nestjs/common';
import { Client, ClientOptions } from 'discord.js';
import { commandData, commands, groupEmbeds } from './static';
import { IChikaContext } from './common/types';

export class Chika extends Client {
  private logger = new Logger('Client');
  readonly context: IChikaContext = { groupEmbeds };

  constructor(options: ClientOptions) {
    super(options);
  }

  static async up(options: ClientOptions) {
    const chika = new Chika(options);
    await chika._login();
    chika._commandsUp();
    chika._listenersUp();
    return chika;
  }

  private _login() {
    return this.login(process.env.APP_TOKEN);
  }

  private _commandsUp() {
    this.guilds.cache.get('848575017406562334')?.commands.set(commandData);
    this.guilds.cache.get('235389763668934656')?.commands.set(commandData);
  }

  private _listenersUp() {
    this.on('ready', () => {
      this.logger.log('Client has logged in');
    });

    this.on('interaction', (interaction) => {
      if (!interaction.isCommand()) return;
      this.logger.log(`Received command: ${interaction.commandName}`);
      commands.get(interaction.commandName)?.worker(interaction, this.context);
    });
  }
}
