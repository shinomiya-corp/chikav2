import { ApplicationCommandData, Collection } from 'discord.js';
import glob from 'glob';
import path from 'path';
import { ICommand, ICommandExtraData } from './types';

const [commandData, commands] = getAllCommands();
export { commandData, commands };

function getAllCommands(): [
  ApplicationCommandData[],
  Collection<string, ICommand>,
] {
  const commandData: ApplicationCommandData[] = [];
  const commands = new Collection<string, ICommand>();
  glob.sync('**/chika/**/*.command.js').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { metadata, data } = require(path.resolve(file)) as {
      metadata: ApplicationCommandData;
      data: ICommandExtraData;
    };
    commandData.push(metadata);
    commands.set(metadata.name, { ...metadata, ...data });
  });
  return [commandData, commands];
}
