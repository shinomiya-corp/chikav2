import { ApplicationCommandData } from 'discord.js';
import glob from 'glob';
import path from 'path';
import type { ICommandExtra } from '../common/types';

const commandData = getAllCommands();
export default commandData;

function getAllCommands(): ApplicationCommandData[] {
  const commandData: ApplicationCommandData[] = [];
  glob.sync('**/chika/**/*.command.js').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { metadata } = require(path.resolve(file)) as {
      metadata: ApplicationCommandData;
      data: ICommandExtra;
    };
    commandData.push(metadata);
  });
  return commandData;
}
