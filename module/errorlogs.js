const fs = require("fs");
function error(error){
  try{
var date = new Date();
    fs.appendFile('./errorlogs.txt', `\n[${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}|${date.getHours()}h|${date.getMinutes()}m|${date.getSeconds()}s] => ${error}`,(err) => {
        if (err) {
         // console.log(`error write log : ${err}`)
         // fuck error again ?,,, my good joe did you make this mistake in my code ??, 
        } else {
          // done
        }
      })
    }catch(err){
      
    }
 }

module.exports = {
   error:error
}