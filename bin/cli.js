#! /usr/bin/env node

const { GREEN, YELLOW, RED, print } = require("../utils/consoleColors");
const argsUtils = require("../utils/args");
const { SHOW_CURSOR,create } = require("../lib/spinner");



// console.clear();
print("you are in right process", GREEN);
const spinner = create({ message: "Loading stuff" }).start();


const init = (args)=>{
    setTimeout(()=>{
        print("Initialising the app", GREEN);
        console.log(args);
        spinner.stop();
    },200)
    

}

// EXECUTION
try {
    init(process.argv);
} catch (e) {
    print(e, RED);
    SHOW_CURSOR();
    process.exit(1);
}