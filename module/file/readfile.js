const fs = require("fs");
function readfile(name){
fs.readFile(name, 'utf8', function(err, data){
    if(err){
        throw `error on file reading (read file module): \n ${err}`;
    }else{
        if(data === undefined || data === "" || data === null){
        throw `${name}file is empty`;
        }else{
        return data;
        }
    }
});
}
module.exports = {
    readfile:readfile
}