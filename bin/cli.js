#! /usr/bin/env node

const { GREEN, YELLOW, RED, print } = require("../utils/consoleColors");

console.clear();
print("my app created successfully", GREEN);

const init = (args)=>{
    console.log(args);

}

// EXECUTION
try {
    const args = argsUtils.getInput(process.argv);
    init(args);
} catch (e) {
    print(e, RED);
    SHOW_CURSOR();
    process.exit(1);
}