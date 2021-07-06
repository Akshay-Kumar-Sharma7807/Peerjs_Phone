// const Peer = require('peerjs');

const peer = new Peer(''+Math.floor(Math.random()*2**18).toString(36).padStart(4,0), {
  host: location.hostname,
  debug: 1,
  path: '/myapp'
});
window.peer = peer;