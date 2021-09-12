function logs(message, type){
    var endof = "%s\x1b[0m"
    var Black = "\x1b[30m"
    var Red = "\x1b[31m"
    var Green = "\x1b[32m"
    var Yellow = "\x1b[33m"
    var Blue = "\x1b[34m"
    var Magenta = "\x1b[35m"
    var Cyan = "\x1b[36m"
    var White = "\x1b[37m"
    var color = `\x1b[0m${endof}`
    if(type === "high"){
        color = `${Red}${endof}`
    }else if(type === "medium"){
        color = `${Yellow}${endof}`
    }else if(type === "low"){
        color = `${Cyan}${endof}`
    }else if(type === "warning"){
        color = `${Yellow}${endof}`
    }else if(type === "info"){
        color = `${Blue}${endof}`
    }else if(type === "all"){
        color = `${White}${endof}`
    }else if(type === "blue"){
        color = `${Blue}${endof}`
    }else if(type === "black"){
        color = `${Black}${endof}`
    }else if(type === "good"){
        color = `${Green}${endof}`
    }else if(type === "Magenta"){
        color = `${Magenta}${endof}`
    }
    console.log(`${color}`, `${message}`);
}
module.exports = {
    logs:logs
}