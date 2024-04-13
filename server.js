// server.js
import express from 'express';
import http from 'http';
const app = express();
import { ExpressPeerServer } from 'peer';
import cors from 'cors';

  
const peerApp = express();
const peerServer = http.createServer(peerApp);
const peerPort = process.env.PORT ||9000;

peerApp.use(cors());


const peerServerOptions = {
  debug: true,
  allow_discovery: true 
};

const peerServerInstance = ExpressPeerServer(peerServer, peerServerOptions);


peerApp.use('/peerjs', peerServerInstance);
app.use(express.static('public'));


peerServer.listen(peerPort, () => {
  console.log(`Peer server is running on port ${peerPort}`);
});