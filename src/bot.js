//Dependencies
const Discord = require('discord.js');
const fs = require('file-system');
const path = require('path');
const moment = require('moment');
const winston = require('winston');
const firebase = require('firebase');

//Setup winston
var colors = {
  levels: {
    info: 0,
    debug: 1,
    warn: 2,
    critical: 3
  },
  colors: {
    info: 'blue',
    debug: 'green',
    warn: 'yellow',
    critical: 'red'
  }
};
var logger = new (winston.Logger)({ levels: colors.levels });
winston.addColors(colors.colors)

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var fbConfig = {
  apiKey: "AIzaSyC441qdpqjTvt6n6MlT5_Zrg_Y_yy_2hYU",
  authDomain: "onmi-bot-43a95.firebaseapp.com",
  databaseURL: "https://omni-bot-43a95.firebaseio.com",
  storageBucket: "omni-bot-43a95.appspot.com",
};
firebase.initializeApp(fbConfig);

//Load Files
try {
  var cfg = fs.readFileSync(path.join(__dirname, 'config', 'config.json'), 'utf-8');
  var helpFile = fs.readFileSync(path.join(__dirname, 'data', 'help.json'), 'utf-8');
} catch (err) {
  if(err) throw err
}

//Variables
let pf = cfg.pf;
let info = "**:notepad-spiral: INFO >> **";
let warning = "**:warning:  WARNING >> **"

//Create Bot Object
const bot = new Discord.Client();

//Bot Initialization
bot.login(cfg.token);

//Functions (None Currently)

//Bot Events
//Bot Variables
bot.on('ready', => {

});
let msgArray = message.content.split(" ");
let command =
