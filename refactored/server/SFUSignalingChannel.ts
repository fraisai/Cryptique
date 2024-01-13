import WebSocket, { WebSocketServer } from 'ws';
import { Server } from 'http';
import { Server as httpsServer } from 'https';

const actions = {
  CONNECTION: 'CONNECTION',
  OFFER: 'OFFER',
  ANSWER: 'ANSWER',
  LOGIN: 'LOGIN',
  ICECANDIDATE: 'ICECANDIDATE',
  LEAVE: 'LEAVE',
  CREATE_ROOM: 'CREATE_ROOM',
  JOIN_ROOM: 'JOIN_ROOM',
  USER_LEFT: 'USER_LEFT',
};

const { OFFER, ANSWER, ICECANDIDATE, LOGIN, LEAVE, USER_LEFT } = actions;

declare class MyWebSocket extends WebSocketServer {
  peerId?: string;
}

interface myClass {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>;
  consumers: Map<string, MyWebSocket[]>;
}
class SFUSignalingChannel {
  webSocketServer: MyWebSocket;
  peers: Map<string, MyWebSocket>; // same as users
  consumers: Map<string, MyWebSocket[]>;

  constructor(server: Server | httpsServer | number) {
    this.webSocketServer = typeof server === 'number' ? new WebSocket.Server({ port: server }) : new WebSocket.Server({ server: server });
    this.peers = new Map();
    this.consumers = new Map();
  }

  initializeConnection() {
    this.webSocketServer.on('connection', (socket: MyWebSocket) => {
      let peerId = Math.random().toString();
      socket.peerId = peerId;
      console.log('A user has connected to the websocket server.', 'peerId:', peerId);

      socket.close = (event) => {
        //         const userToDelete = this.getByValue(this.peers, socket);
        // let user = '';
        // for (const [key, value] of this.peers.entries()) {
        //   if (value === socket) user = key;
        // }
        // const userToDelete = user;
        // this.peers.delete(userToDelete);
        // this.consumers.delete(userToDelete);
        // const userLeftPayload = {
        //     ACTION_TYPE: USER_LEFT,
        //     payload: socket.id
        // }
        // this.peers.forEach(function(peer) {
        //     if (peer.socket.readyState === WebSocket.OPEN) {
        //         this.peer.socket.send(JSON.stringify(userLeftPayload));
        //     }
        // })
      };
      // END onCLOSE
    });
  }
}

export default SFUSignalingChannel;
