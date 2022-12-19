///const app = require('./app.js')
const fs = require('fs').writeFileSync;
// console.log("sub",app)
// console.log(app.z());

// fs.writeFileSync("hello.txt","file created");
// fs.writeFileSync("hello2.txt","like and subscribe");
fs("hello3.txt","like and subscribe");
console.log('==>',__dirname)
// const array = [12,5,2,3,4,4,4];
// let result= array.filter((items)=>{ //can also use to iterate all values
//     console.log(items)
//     return items>4;
// })
// console.log(result);



function test(a,b)
{

}
test(10,20)