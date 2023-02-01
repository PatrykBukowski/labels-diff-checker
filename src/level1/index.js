import chalk from "chalk";
import boxen from "boxen";
import {commander3} from "../utils/commander/index.js";
const aio = () => {};
const sf = () => {};
const example = () => {};

const level1 = () => {
  const options = [
    { command: "aio", comment: "Create one common file for differences and missing items", program: aio },
    { command: "sf", comment: "Create separate files for differences and missing items", program: sf },
    { command: "examples", comment: "Show how new files would looks like", program: example },
    { command: "back", comment: "Go back to the home page", program: "exit"},
  ];
  commander3(options, () => {
    console.log(chalk.gray('/main/level1'));
    console.log(chalk.magentaBright(boxen('LEVEL 1', {padding: 1})));
    console.log(`In first level you should choose mode (aio/sf).
    
This is required because you won't go to level 2 without it ;P`);
  })
}
export default level1;