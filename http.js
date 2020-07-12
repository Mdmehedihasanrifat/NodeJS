const http=require('http');

const server=http.createServer(function(req , res){


    console.log(req.url);
    res.end("<h1>Hello node js</h1>")

})

server.listen(4141,function () {
console.log("server runnning");
})