import { Logger } from '@nestjs/common';
import { Client, ClientOptions } from 'discord.js';
import { commandData, commands } from './commands';

export class Chika extends Client {
  private logger = new Logger('Client');

  constructor(options: ClientOptions) {
    super(options);
  }

  static async start(options: ClientOptions) {
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
  }

  private _listenersUp() {
    this.on('ready', () => {
      this.logger.log('Client has logged in');
    });

    this.on('interaction', (interaction) => {
      if (!interaction.isCommand()) return;
      this.logger.log(`Received command: ${interaction.commandName}`);
      commands.get(interaction.commandName)?.worker(interaction);
    });
  }
}
