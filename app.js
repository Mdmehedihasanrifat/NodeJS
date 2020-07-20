var all = require('./fuinction');
let https=require('http');
let fs=require('fs');

console.log("Hello World");


module.exports.add=(a,b)=>a+b;

console.log(module);
console.log(__filename);
console.log("hello nodemon");


setTimeout(function () {
   console.log("3 sec passed");

   console.log(__dirname);
},3000);


console.log(all.adder(all.pi,5));


var server = https.createServer(function (req,res) {
console.log("request is"+req.url)

    var ReadStram=fs.createReadStream(__dirname+'/index.html','utf-8')

    ReadStram.pipe(res);
})

server.listen(3000,function () {
console.log("server ok")
})