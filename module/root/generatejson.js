const Database = require("../database/databases");
const config = require("../../config.json");
const databasesfilaneme = config.databasesfilaname;
const datanames = config["databases-names"];

function generate(){
    var DataObjetnumber = new Database(`./${databasesfilaneme}/${datanames.Objetnumber}.json`);
    var DataObjetpropreties = new Database(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`);
    var DataObjetcore = new Database(`./${databasesfilaneme}/${datanames.Objetcore}.json`);
    var DataNamesnumber = new Database(`./${databasesfilaneme}/${datanames.Namesnumber}.json`);
    var DataNamesname = new Database(`./${databasesfilaneme}/${datanames.Namesname}.json`);
}