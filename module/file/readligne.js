var fs = require('fs')
var readline = require("./ligneperligne");
const config = require("../../config.json");
function lignelist(name){
var source=`./${config.toconvertfoldername}/${name}`;
//var target="/scripts/node-readline/demotgt.htm"

var r=readline.fopen(source,"r")
if(r===false)
{
   console.log("Error, can't open ", source)
   process.exit(1)
} 

//var w = fs.openSync(target,"w")
var count=0
var lignelist = [];
do
{
   var line=readline.fgets(r)
   //console.log(line)
   lignelist.push(line)
  // fs.writeSync(w, line + "\n", null, 'utf8')
   count+=1
}
while (!readline.eof(r))
readline.fclose(r)
return lignelist;
//fs.closeSync(w)
}

module.exports = {
    lignelist:lignelist
}