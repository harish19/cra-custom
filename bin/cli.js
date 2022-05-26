#! /usr/bin/env node

const { GREEN, YELLOW, RED, print } = require("../utils/consoleColors");
const argsUtils = require("../utils/args");
const { SHOW_CURSOR } = require("../lib/spinner");
const SPINNER_FACTORY = require("../lib/spinner");



// console.clear();
print("you are in right process", GREEN);
const spinner = SPINNER_FACTORY.create({ message: "Loading stuff" }).start();


const init = (args)=>{
    print("Initialising the app", GREEN);
    console.log(args);
    spinner.stop();

}

// EXECUTION
try {
    init(process.argv);
} catch (e) {
    print(e, RED);
    SHOW_CURSOR();
    process.exit(1);
}