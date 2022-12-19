const http =require('http'); //it will handle all the request and response
const colors = require('colors');
console.log("hello".yellow)
//part 1//http.createServer().listen(4500);
// part 2 
/*
    http.createServer((req,res)=>{
        res.write("<h1> hi developer!, This is Rohit</h1>");
        res.end();
    }).listen(4500);
*/

// http.createServer(dataControl).listen(4500)
// function dataControl(req,res){
// res.write("<h1>This is Rohit callback</h1>");
// res.end();
// }