//Dependencies
const Discord = require('discord.js');
const fs = require('file-system');
const path = require('path');
const moment = require('moment');
const firebase = require('firebase');
const colors = require('colors');

//Console colors
colors.setTheme({
  info: 'cyan',
  data: 'grey',
  warn: 'yellow',
  debug: 'blue',
  error: 'orange',
  fatal: 'red'
});

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
