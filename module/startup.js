const { freeze } = require("./freeze");
const loger = require("./log")
const jsonstartinfo = require("../start.json");
function startcopreing(){
var gamotronic_logo = `
 /$$$$$$$                                     /$$                                   /$$             
/$$__  $$                                    | $$                                  |__/            
| $$  \__/  /$$$$$$  /$$$$$$/$$$$   /$$$$$$  /$$$$$$  /$$$$$$   /$$$$$$  /$$$$$$$  /$$  /$$$$$$$ 
| $$ /$$$$ |____  $$| $$_  $$_  $$ /$$__  $$|_  $$_/ /$$__  $$ /$$__  $$| $$__  $$| $$ /$$_____/
| $$|_  $$  /$$$$$$$| $$ \ $$ \ $$| $$  \ $$  | $$  | $$  \__/| $$  \ $$| $$  \ $$| $$| $$      
| $$  \ $$ /$$__  $$| $$ | $$ | $$| $$  | $$  | $$ /$$| $$      | $$  | $$| $$  | $$| $$| $$      
|  $$$$$$/|  $$$$$$$| $$ | $$ | $$|  $$$$$$/  |  $$$$/| $$      |  $$$$$$/| $$  | $$| $$|  $$$$$$$ 
\______/  \_______/|__/ |__/ |__/ \______/    \___/  |__/       \______/ |__/  |__/|__/ \_______/                                                                                                                                                  
`;
loger.logs(`${gamotronic_logo}`, "all")
freeze(1000);
loger.logs(`\n Create by gamotronic`, "good")
freeze(1000);
loger.logs(`\n Start File Configuration .`, "red")
freeze(1000);
loger.logs(`\n Start File Configuration .`, "info")
freeze(500);
loger.logs(`\n\n.`, "info")
freeze(250);
loger.logs(`\n.`, "info")
freeze(250);
loger.logs(`.`, "info")
freeze(250);
console.clear();

}
function startinfo(){
    loger.logs(`\n\n\n\n\n\nWelcome User :)`, "all")
    freeze(1500);
    console.clear();
    loger.logs(`\n\n\n\n\n\nLook your configuration`, "all")
    freeze(500);
    console.clear();
    loger.logs(`\n\n\n\n\n\nConfiguration: [GeneratorLogs: "${jsonstartinfo.Generator}"] | [NamesDump: "${jsonstartinfo.NamesDump}"] | [ObjectsDump: "${jsonstartinfo.ObjectsDump}"]`, "all")
    freeze(3000);
    console.clear();
    loger.logs(`\n\n\n\n\nStart...`, "info")
    freeze(250);
    console.clear();
}
function EndInfo(){
 freeze(500);
 console.clear();
 freeze(250);
 loger.logs(`\n\n\n\nFinish`, "good")
 freeze(250);
 loger.logs(`\n\n\n\nExit in : `, "blue")
 freeze(1000);
 console.clear();
 loger.logs(`\n\n\n\n\n\n30`, "blue")
 freeze(10000);
 console.clear();
 loger.logs(`\n\n\n\n\n\n\n\n20`, "blue")
 freeze(10000);
 console.clear();
 loger.logs(`\n\n\n\n\n\n\n\n\n\n10`, "blue")
 freeze(10000);
 process.exit(1);
}
module.exports = {
    startcopreing:startcopreing,
    startinfo:startinfo,
    EndInfo:EndInfo
}