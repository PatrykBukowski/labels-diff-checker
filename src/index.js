import chalk from 'chalk';
import boxen from 'boxen';
import {commander3} from "./utils/commander/index.js";
import helpMode from './help/index.js';
import level1 from './level1/index.js';

const options = [
  { command: "start", comment: "Just do it!", program: level1 },
  { command: "help", comment: "Information about labels diff checker", program: helpMode },
  { command: "exit", comment: "Close program"}
];

commander3(options, () => {
  console.log(chalk.gray('/main'));
  console.log(chalk.magentaBright(boxen('LABELS DIFF CHECKER', {padding: 1})));
})