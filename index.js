const fs = require('fs'); //fs is a built in module in Node.js 
const readline = require('readline-sync');
//const { consumers } = require('stream');

const filename = readline.question('Filename?\n');
console.log(`Choosen file name is ${filename}`);


const quote = "Why, sometimes I've believed as many as six impossible things before breakfast.";

fs.writeFile(filename + '.txt', quote, (error)=>{
    if (error){
        console.log(error)
    }else{
        console.log("Quote saved")
    }
});



//const file = fs.createWriteStream('OscarWild.txt')

//for(let i= 0; i < 5; i++){
//    file.write(`${i}. You can never be overdressed or overeducated. \n `)
//};

//file.end()