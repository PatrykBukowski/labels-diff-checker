import chalk from "chalk";
import boxen from "boxen";
import {commander3} from "../utils/commander/index.js";

const help = () => {
  const options = [
    { command: "back", comment: "Go back to the home page", program: "exit"},
  ];

  commander3(options, () => {
    console.log(chalk.gray('/main/help'));
    console.log(chalk.magentaBright(boxen('HELP', {padding: 1})));
    console.log(`Our mission is to provide Salesforce administrators with a tool to quickly and easily identify and compare differences in custom label XML files.
Our program streamlines the process of maintaining and updating custom labels, ensuring that all Salesforce users have access to the most up-to-date information.

One day, a Salesforce administrator approached us, struggling to keep track of the countless changes made to custom labels in their org.
Every time they needed to make updates, they had to manually compare each custom label XML file to ensure that the changes were accurate and consistent.

We showed them how our program could help, and the administrator was amazed at the time and effort they saved.
With the ability to quickly and easily compare custom label XML files, they were able to efficiently maintain and update the custom labels in their org.

It was a heart-shaking moment, to see the impact our program was having on people's lives and careers.
We were proud to be making a difference and helping Salesforce administrators work more efficiently, freeing up time and resources to focus on other important tasks.`);
  })
}

export default help;