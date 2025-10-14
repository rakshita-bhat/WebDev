const fs = require("fs");

fs.writeFile("hello.txt","Hello from NodeJS!.I am Rakshita",(err)=>{
    if(err) throw err;
    console.log("File successfully created");
});

fs.readFile("hello.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});