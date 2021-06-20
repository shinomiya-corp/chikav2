import { ApplicationCommandData, Collection } from 'discord.js';
import * as glob from 'glob';
import * as path from 'path';
import { Command, CommandExtraData } from './types';

const [commandData, commands] = getAllCommands();
export { commandData, commands };

function getAllCommands(): [
  ApplicationCommandData[],
  Collection<string, Command>,
] {
  const commandData: ApplicationCommandData[] = [];
  const commands = new Collection<string, Command>();
  glob.sync('**/chika/**/*.command.js').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { metadata, data } = require(path.resolve(file)) as {
      metadata: ApplicationCommandData;
      data: CommandExtraData;
    };
    commandData.push(metadata);
    commands.set(metadata.name, { ...metadata, ...data });
  });
  return [commandData, commands];
}
