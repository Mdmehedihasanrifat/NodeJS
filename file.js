var fs =require('fs');

let readMe=fs.readFileSync('readme.txt','utf-8');
console.log(readMe);


fs.writeFileSync('write.txt',readMe);

fs.readFile('readme.txt','utf-8',function (err,data) {
     console.log(data);

});
console.log("let do is first");

fs.writeFile( 'Write.txt',readMe,function (err) {
    if (err) throw err;
    console.log('Replaced!');
});