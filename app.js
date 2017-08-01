const Komada = require('komada');
const config = require('./config');

const client = new Komada.Client(config.botSettings);

client.login(config.botToken);