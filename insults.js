const fs = require('fs'); 
const readline = require('readline-sync');

const filename = readline.question("Type the name of the file that you want to view it's content:\n");

fs.readFile(filename + ".json", 'utf-8', (error, content)=>{
    if(content){
        let count = 0;
        let insultsArray = '';
        let obj = JSON.parse(content, function (key, value){
            if (key === "insult"){
                count++
                console.log(`Insults #${count}: ${value}`)
                
            }
        })
        //console.log(typeof(insultsArray))
        console.log(`Total number of insults: ${count}`)
        
        
    }

})