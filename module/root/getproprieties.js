const config = require("../../config.json");
const numberligneinit = config["SDK-propreties"].numbersmax;
const numberligne = numberligneinit + 2;
const alphab = config.utility.alphab;
const adresslenght = config["SDK-propreties"].adresslenght;
function getObjectproprieties(ligne){
 return {
     number: getnumber(ligne),
     propreties: getprop(ligne),
     core: getcore(ligne),
     adress: getadress(ligne)
 }
}
function getNamesproprieties(ligne){
    return {
        number: getnumber(ligne),
        name: gettype(ligne)
    }
}
function getnumber(ligne){
    var l = `${ligne}`;
    var number =  l.slice(1, numberligneinit);
    return number;
}
function gettype(ligne){
    var l = `${ligne}`;
    var ligntr = l;
    var start = numberligne;
    var cute1 = ligntr.slice(start, l.length);
    var endcute = cute1.indexOf(" ");
    var Mytype = cute1.slice(0, endcute);
    return Mytype;
}
function getprop(ligne){
    var l = `${ligne}`;
    var ligntr = l;
    var start = numberligne;
    var cute1 = ligntr.slice(start, l.length);
    var endcute = cute1.indexOf(" ");
    var MyPropreties = cute1.slice(0, endcute);
    return MyPropreties;
}
function getcore(ligne){
    var l = `${ligne}`;
    var lintr = l;
    var firstspace = lintr.indexOf(" ");
    var classstart = firstspace + 1;
    var round2 = lintr.slice(classstart, l.length);
    var secondspace = round2.indexOf(" ");
    var corestart = secondspace + 1;
    var stringcorestart = round2.slice(corestart, round2.length)
    var stopclass = stringcorestart.indexOf(" ");
    var Mycore = stringcorestart.slice(0, stopclass);
    return Mycore;
}
function getadress(ligne){
    var l = `${ligne}`;
    var lintr = l;
    var lenght = l.length;
    var startslice = l.length - adresslenght;
    var Myadress = lintr.slice(startslice, lenght);
    return Myadress;
}

module.exports = {
    getNamesproprieties:getNamesproprieties,
    getObjectproprieties:getObjectproprieties
}