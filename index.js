const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const TeamFortress2 = require('tf2');
const config = require('./config');

let client = new SteamUser();
let tf2 = new TeamFortress2(client);

const logInOptions = 
{
    accountName: config.accountName,
    password: config.password,
    twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret)
};

client.logOn(logInOptions);

client.on('loggedOn', () => {
    console.log("Logged in!");

    client.setPersona(1);
    client.gamesPlayed([440]);
});

//https://github.com/DoctorMcKay/node-tf2
//https://github.com/DoctorMcKay/node-steam-user
//https://github.com/Jessecar96/SteamDesktopAuthenticator
