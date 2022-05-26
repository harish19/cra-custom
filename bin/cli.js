#! /usr/bin/env node

const { GREEN, YELLOW, RED, print } = require("../utils/consoleColors");
const { SHOW_CURSOR } = require("../lib/spinner");


console.clear();
print("you are in right process", GREEN);

const init = (args)=>{
    print("Initialising the app", GREEN);
    console.log(args);

}

// EXECUTION
try {
    init(process.argv);
} catch (e) {
    print(e, RED);
    SHOW_CURSOR();
    process.exit(1);
}