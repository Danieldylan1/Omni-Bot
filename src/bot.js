//Dependencies
const Discord = require('discord.js');
const fs = require('file-system');
const path = require('path');
const moment = require('moment');
const log = require('winston');

//Load Files
try {
  var cfg = fs.readFileSync(path.join(__dirname, 'config', 'config.json'), 'utf-8');
} catch (err) {
  if(err) throw err
}

//Variables
let pf =
