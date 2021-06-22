import { ApplicationCommandData, Collection } from 'discord.js';
import glob from 'glob';
import path from 'path';
import type { ICommand, ICommandExtra } from '../common/types';

const commands = getAllCommands();
export default commands;

function getAllCommands(): Collection<string, ICommand> {
  const _commands = new Collection<string, ICommand>();
  glob.sync('**/chika/**/*.command.js').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { metadata, data } = require(path.resolve(file)) as {
      metadata: ApplicationCommandData;
      data: ICommandExtra;
    };
    _commands.set(metadata.name, { ...metadata, ...data });
  });
  return _commands;
}
