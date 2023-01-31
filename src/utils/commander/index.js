import chalk from "chalk";
import prompter from "../prompter/index.js";

const commander = (command, comment) => {
  console.log(chalk.magenta('- ' + command + ': '), '\t', comment);
}

export const commander2 = (list) => {
  const modes = {};
  console.log();
  console.log(chalk.bold.magenta("Options:"));
  console.log();
  for (const el of list) {
    commander(el.command, el.comment);
    if (el.program) {
      modes[el.command] = el.program;
    }
  }
  console.log();

  const command = prompter();
  if(modes[command] === 'exit') return 'exit';
  if (modes[command]) {
    modes[command]();
  }

  return command;
}

export const commander3 = (options, callback) => {
  let command = "";
  do {
    console.clear();
    callback();
    command = commander2(options);
  } while (command !== "exit");
}

export default commander;
