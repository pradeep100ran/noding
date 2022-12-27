var r=0;

const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({

    port: PORT

});

wsServer.on('connection', function (socket) {

    // Some feedback on the console

    console.log("A client just connected");

    // Attach some behavior to the incoming socket

    socket.on('message', function (msg) {

        console.log("Received message from client: "  + msg);

        // socket.send("Take this back: " + msg);

        // Broadcast that message to all connected clients

        wsServer.clients.forEach(function (client) {

            //client.send(msg*msg);

          

          

      //client.send(Math.floor(Math.random() * 1000));

          

          

          

          

         });

    });

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

//console.log(makeid(5));

setInterval(() => {

wsServer.clients.forEach((client) => {

    

//let d = new Date();

  

  

  

    let dt = new Date();

 let   d = new Date(dt.getTime() + 330 * 60 * 1000);

      

      

    r++;  

      

let aa=(${d.getHours()}:${d.getMinutes()}:${d.getSeconds()});

    client.send('Request No = ' + r + ' Time = ' + aa + ' Id = ' + makeid(5));

  //var nf=18450+ Math.floor(Math.random() * 10);

  //var nf =

   //   (Math.round(nf * 100) / 100).toFixed(2);

  //client.send(tt);

  

  

 // var bnf=44800+Math.floor(Math.random()*40);

 // var bnf=(Math.round(bnf*100)/100).tofixed(2);

  

  

 // var feed = '{'

     //  +'"nifty":"'+nf+'",'

     //  +'"banknifty":"'+nf+'",'

    //   +'"time":"'+d+

      // '"}';

  

 // client.send(feed);

  

  

});

},1);

console.log( (new Date()) + " Server is listening on port " + PORT);
