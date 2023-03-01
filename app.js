const readlineSync = require("readline-sync");
const axios = require("axios");
const prompt = require("prompt");
const colors = require("colors");
const dns = require("dns")
const portscanner = require("portscanner")

function byName(message){
	message = "Created by:";
	console.log(message);
};

byName();

const ascii1 = console.log("  ____              ")
const ascii2 = console.log(" |  _ \             ")
const ascii3 = console.log(" | |_) |_   _  __ _ ")
const ascii4 = console.log(" |  _ <| | | |/ _` |")
const ascii5 = console.log(" | |_) | |_| | (_| |")
const ascii6 = console.log(" |____/ \__,_|\__, |")
const ascii7 = console.log("               __/ |")
const ascii8 = console.log("              |___/ ")
console.log("")
function start(){

	console.log("[1] Instagram tool")
	console.log("[2] Portscanner")

	var tool = readlineSync.question("Choose below which tool your want to use now: ")
	if(tool == "" || tool == null || tool == undefined || !tool){
		console.log("Code: 1 - Exit")
	}

	if(tool == 1){
		console.log("")
		instagramtool();
	}else if(tool == 2){
		console.log("")
		portscannerr();
	}
}
start();

function instagramtool(){
	prompt.start();
	prompt.get(
    ['username'], function (err, result){
    	console.log("Username:".bgGray+ " " + result.username)
        axios.get('https://www.instagram.com/'+result.username+'/feed/?__a=1&__d=dist').then( response =>{
            console.log('===============Informations below=================')
            console.log('Name profile:'.bgBlue+ " " + response.data.graphql.user.full_name)
            console.log('==================================================')
            console.log('Biography:'.bgBlue+ " " + response.data.graphql.user.biography)
            console.log('==================================================')
            console.log('Profile Picture:'.bgBlue+ " " + response.data.graphql.user.profile_pic_url_hd)
            console.log('==================================================')
            console.log('End. Made by J/Bug')
        	})
    	}
	)
}

function portscannerr(warning){
	warning = 'Put the url without protocol http/s'
    console.log(warning)

prompt.start()
prompt.get(['url'], function (error, result){
    dns.lookup(result.url, (err, address, family) => {
        console.log(address)
        const obj1 = {
            http: 80,
            https: 443,
            ssh: 22
        }
        for (const key in obj1) {
            portscanner.checkPortStatus(obj1[key], address, function (error, status){
                console.log(`${key}: ${status}`)
            })
        }
    })
})
}
