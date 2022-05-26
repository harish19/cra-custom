#! /usr/bin/env node

const { GREEN, YELLOW, RED, print } = require("../utils/consoleColors");
const argsUtils = require("../utils/args");
const { SHOW_CURSOR,create } = require("../lib/spinner");

const {execSync} = require('child_process');

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/harish19/react-ssr-csr.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
const runCommand = command =>{
    try{
        execSync(`${command}`, {stdio:'inherit'});
    }catch(e){
        print(`Failed to execute ${command}`,RED);
        return false;
    }
    return true;
}

console.clear();
print("you are in right process", GREEN);
const spinner = create({ message: "Loading stuff" }).start();


const init = (args)=>{
    // setTimeout(()=>{
    //     print("Initialising the app", GREEN);
    //     console.log(args);
    //     spinner.stop();
    // },20000)

    console.log(`Cloning the repository with name ${repoName}`);
    const checkout = runCommand(gitCheckoutCommand);

    if(!checkout)process.exit(1);


    console.log(`Installing dependencies ${repoName}`);
    const install = runCommand(installDepsCommand);

    if(!install)process.exit(1);

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