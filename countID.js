const fs = require('fs'); //fs is a built in module in Node.js 
const readline = require('readline-sync');

const filename = readline.question('Which file would you like to check?\n')

fs.readFile(filename + ".css", 'utf-8', (error, content)=>{
    if(content){ 
        const arr = content.split('');
        idCount = arr.filter(id => id === '#').length
        console.log(`There were ${idCount} IDs in ${filename}.css`)
    
        
    }else{
        console.log(error)
    }
})