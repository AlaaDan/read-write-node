const fs = require('fs'); 
const readline = require('readline-sync');
const filename = readline.question("Type in the file name you want to view it;s content:\n")

fs.readFile(filename + '.html', 'utf-8', (error, content) =>{
    if(content){
        console.log(content)
    }else{
        console.log(error)
    }
})