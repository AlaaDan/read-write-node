const fs = require('fs'); //fs is a built in module in Node.js 
const readline = require('readline-sync');

const filename = readline.question('Type the file name:\n');

fs.readFile(filename + '.txt', 'utf8', (error, content)=>{
    if (content){
        console.log(content)

    }else{
        console.log(error)
    }
});