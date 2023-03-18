const fs = require('fs'); 
const readline = require('readline-sync');

const filename = readline.question('Filename?\n');

const usertext = readline.question(`Write something to save it to ${filename} \n`);

fs.writeFile(filename + '.txt', usertext, (error)=>{
    if (error){
        console.log(error)
    }else{
        fs.readFile(filename + '.txt', 'utf8', (error, content)=>{
            if (content){
                console.log(content)
        
            }else{
                console.log(error)
            }
        });
    }
});

