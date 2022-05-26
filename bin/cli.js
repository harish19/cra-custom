#!/usr/bin/env node

// const {execSync} = require('child_process');

// const repoName = process.argv[2];
// const gitCheckoutCommand = `git clone --depth 1 https://github.com/harish19/cra-custom.git ${repoName}`;
// const installDepsCommand = `cd ${repoName} && npm install`;

// const runCommand = command =>{
//     try{
//         execSync(`${command}`, {stdio:'inherit'});
//     }catch(e){
//         console.error(`Failed to execute ${command}`,e);
//         return false;
//     }
//     return true;
// }

// console.log(`Cloning the repository with name ${repoName}`);
// const checkout = runCommand(gitCheckoutCommand);

// if(!checkout)process.exit();


// console.log(`Installing dependencies ${repoName}`);
// const install = runCommand(installDepsCommand);

// if(!install)process.exit();


console.log('All set now please run the command npm run start to make local server up');