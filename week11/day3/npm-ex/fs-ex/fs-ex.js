const fs = require("fs");

console.log('before');
// const data = fs.readFileSync('infor', 'utf-8');
// console.log(data);
// fs.readFile('info.json','utf-8',(err,data)=>{
//     if(err) return console.log(err)
//     console.log(data);
// });
// console.log('after');

const users = [{name: "John"},{name:"Lennon"}];

// fs.writeFile('info.txt','bla bla bla','utf-8', (err)=>{
//     if(err) return console.log(err);
//     console.log("File created")
// });

fs.copyFile('info.json','shanonush', (err)=>{
    
});