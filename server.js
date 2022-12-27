'use strict';
r=0;
const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});


function makeid(length) {

    var result           = '';

    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    var charactersLength = characters.length;

    for ( var i = 0; i < length; i++ ) {

        result += characters.charAt(Math.floor(Math.random() * charactersLength));

    }

    return result;

}




setInterval(() => {
  wss.clients.forEach((client) => {

function generate_token(length){
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
r++;  
client.send('Request No = ' + r + ' Time = ' + aa + ' Id = ' + makeid(5));
    //client.send(generate_token(64));
  });
}, 1);
