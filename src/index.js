const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

client.connect()

module.exports = client; 

// Do not change anything here
require('http').createServer((req, res) => res.end(`
 |-----------------------------------------|
 |              Informations               |
 |-----------------------------------------|
 |• Alive: 24/7                            |
 |-----------------------------------------|
 |• Author: Cloynn_#6163                   |
 |-----------------------------------------|
 |-----------------------------------------|
 |• Youtube: Cloynn_                       |
 |-----------------------------------------|
`)).listen(3000) //Dont remove this 
