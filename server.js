const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app)

const port = 3000;

console.log(path)

const {ExpressPeerServer} = require('peer');

const peerServer = ExpressPeerServer(server,{
  proxied:true,
  debug:true,
  path: '/myapp',
  ssl:{}
})

app.use(peerServer);

app.use(express.static(path.join(__dirname)));
app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})

server.listen(port,(err,calback)=>{
  if(err) console.log(err);
  console.log("App is listening on port: " + 3000);
});
