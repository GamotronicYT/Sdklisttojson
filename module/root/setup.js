const fs = require("fs");
const setupconfig = require("../../start.json");
const config = require("../../config.json");
const { freeze } = require("../freeze");
const loger = require("../log");
function setup(){
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].Namesname}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].Namesnumber}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].ObjetAdress}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].Objetcore}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].Objetnumber}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.unlink(`./${config.databasesfilaname}/${config["databases-names"].Objetpropreties}.json`, (err) => {
        if(err){
            console.clear("error cleared (inexist)")
        }else{
            console.clear("cleared")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].Namesname}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].Namesnumber}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].ObjetAdress}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].Objetcore}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].Objetnumber}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    fs.writeFile(`./${config.databasesfilaname}/${config["databases-names"].Objetpropreties}.json`, "", function(err){
        if(err){
            throw err;
        }else{
            console.clear("create")
        }
    })
    console.clear();
    loger.logs("\n\n\n\n\n\nclear all cache", "all");
    freeze(3000);
    console.clear();
    loger.logs("\n\n\n\n\n\nstart decompile", "all");
    freeze(1500);
    console.clear();
}

module.exports = {
    setup:setup
}