const fs = require("fs");
const lignereader = require("../file/readligne");
const proprietiesdecomposer = require("./getproprieties");
const Database = require("../database/databases");
const config = require("../../config.json");
const { freeze } = require("../freeze");
const { fstat } = require("fs");
const errorlogs = require("../errorlogs");
const databasesfilaneme = config.databasesfilaname;
const datanames = config["databases-names"];
const loger = require("../log");
function uncompile(Unames, Uobject){
    try {
    var UnamesLigne = lignereader.lignelist(Unames);
    var UobjectLigne = lignereader.lignelist(Uobject);
    /*var DataObjetnumber = new Database(`./${databasesfilaneme}/${datanames.Objetnumber}.json`);
    var DataObjetpropreties = new Database(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`);
    var DataObjetcore = new Database(`./${databasesfilaneme}/${datanames.Objetcore}.json`);
    var DataNamesnumber = new Database(`./${databasesfilaneme}/${datanames.Namesnumber}.json`);
    var DataNamesname = new Database(`./${databasesfilaneme}/${datanames.Namesname}.json`);
    var DataObjetAdress = new Database(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`);
    DataObjetnumber.clear();
    DataObjetpropreties.clear();
    DataObjetcore.clear();
    DataNamesnumber.clear();
    DataNamesname.clear();
    DataObjetAdress.clear();
    var Objetnumber = [];
    var Objetpropreties = [];
    var Objetcore = [];
    var Namesnumber = [];
    var Namesname = [];
    var ObjetAdress = [];*/
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetnumber}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base  : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetcore}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base  : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base  : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesname}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesnumber}.json`, `{`, (err) =>  {
      if (err) {
        console.log(`error write base : ${err}`)
      } else {
        // done
      }
    })
    var namescount = UnamesLigne.length;
    var countnames = 0;
    var finalnamescount = namescount - 1;
    UnamesLigne.forEach(nameligne => { 
      loger.logs(nameligne, "warning");
      countnames++;
        //console.log(nameligne); // for fun and fucking design
        var Nameproprietiesgenerate = proprietiesdecomposer.getNamesproprieties(nameligne);
        loger.logs(Nameproprietiesgenerate.name, "blue");
        loger.logs(Nameproprietiesgenerate.number, "blue");
        if(countnames <= finalnamescount){
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesname}.json`, `
          \n
          "${Nameproprietiesgenerate.name}":"${Nameproprietiesgenerate.number}",
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesnumber}.json`, `
          \n
          "${Nameproprietiesgenerate.number}":"${Nameproprietiesgenerate.name}",
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
        }else{
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesname}.json`, `
          "${Nameproprietiesgenerate.name}":"${Nameproprietiesgenerate.number}"
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesnumber}.json`, `
          "${Nameproprietiesgenerate.number}":"${Nameproprietiesgenerate.name}"
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
      }
       /* Namesnumber.push(Nameproprietiesgenerate.number);
        Namesname.push(Nameproprietiesgenerate.name);*/
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesname}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Namesnumber}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
   console.clear();
   var objetcount = UobjectLigne.length;
   var countobjet = 0;
   var finalobjetcount = objetcount;
    UobjectLigne.forEach(objetligne => {
      countobjet++;
      loger.logs(objetligne, "warning");
        //console.log(objetligne); // for fun and fucking design
        var Objetproprietiesgenerate = proprietiesdecomposer.getObjectproprieties(objetligne);
        var adress = Objetproprietiesgenerate.adress.slice(0, Objetproprietiesgenerate.adress.length - 1);
        loger.logs(Objetproprietiesgenerate.number, "blue");
        loger.logs(Objetproprietiesgenerate.core, "blue");
        loger.logs(Objetproprietiesgenerate.propreties, "blue");
        loger.logs(adress, "blue");
        if(countobjet >= finalobjetcount){
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetnumber}.json`, `
           "${Objetproprietiesgenerate.number}":{
            "core":"${Objetproprietiesgenerate.core}",
            "propreties":"${Objetproprietiesgenerate.propreties}",
            "adress":"${adress}"
  
          }
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`, `
          "${Objetproprietiesgenerate.propreties}":{
            "core":"${Objetproprietiesgenerate.core}",
            "number":"${Objetproprietiesgenerate.number}",
            "adress":"${adress}"
  
          }
          `
          , (err) =>  {
            if (err) {
              //console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetcore}.json`, `
          "${Objetproprietiesgenerate.core}":{
            "propreties":"${Objetproprietiesgenerate.propreties}",
            "number":"${Objetproprietiesgenerate.number}",
            "adress":"${adress}"
  
          }
          `
          , (err) =>  {
            if (err) {
              //console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
          fs.appendFileSync(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`, `
          "${adress}":{
            "propreties":"${Objetproprietiesgenerate.propreties}",
            "number":"${Objetproprietiesgenerate.number}",
            "core":"${Objetproprietiesgenerate.core}"
  
          }
          `
          , (err) =>  {
            if (err) {
             // console.log(`error write log : ${err}`)
            } else {
              // done
            }
          })
        }else{
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetnumber}.json`, `
         "${Objetproprietiesgenerate.number}":{
          "core":"${Objetproprietiesgenerate.core}",
          "propreties":"${Objetproprietiesgenerate.propreties}",
        `
        , (err) =>  {
          if (err) {
           // console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetnumber}.json`, `"adress":"${adress}"
       },
       `
       , (err) =>  {
         if (err) {
          // console.log(`error write log : ${err}`)
         } else {
           // done
         }
       })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`, `
        "${Objetproprietiesgenerate.propreties}":{
          "core":"${Objetproprietiesgenerate.core}",
          "number":"${Objetproprietiesgenerate.number}", 
        `
        , (err) =>  {
          if (err) {
            //console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`, `"adress":"${adress}"
        },
        `
        , (err) =>  {
          if (err) {
            //console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetcore}.json`, `
        "${Objetproprietiesgenerate.core}":{
          "propreties":"${Objetproprietiesgenerate.propreties}",
          "number":"${Objetproprietiesgenerate.number}",
        `
        , (err) =>  {
          if (err) {
            //console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetcore}.json`, `"adress":"${adress}"
        },
        `
        , (err) =>  {
          if (err) {
            //console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`, `"${adress}":{`, (err) =>  {
          if (err) {
           // console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
        fs.appendFileSync(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`, `
          "propreties":"${Objetproprietiesgenerate.propreties}",
          "number":"${Objetproprietiesgenerate.number}",
          "core":"${Objetproprietiesgenerate.core}"
        },
        `
        , (err) =>  {
          if (err) {
           // console.log(`error write log : ${err}`)
          } else {
            // done
          }
        })
      }
        /*Objetnumber.push(Objetproprietiesgenerate.number);
        Objetpropreties.push(Objetproprietiesgenerate.propreties);
        Objetcore.push(Objetproprietiesgenerate.core);
        ObjetAdress.push(adress);*/
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetnumber}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.ObjetAdress}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetcore}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
    fs.appendFileSync(`./${databasesfilaneme}/${datanames.Objetpropreties}.json`, `}`, (err) =>  {
      if (err) {
        console.log(`error write log : ${err}`)
      } else {
        // done
      }
    })
}catch(err){
  try{
   errorlogs.error(err);
  }catch(err){
    //fuck all fucking error 
  }
}
}

module.exports = {
    uncompile:uncompile
}