import React, { useState, useRef, useEffect } from 'react';

// same as handleMessage
export const Socket = ({ ws }) => { // ws = ws.current
    ws.onmessage = (message) => {
        const parsedData = JSON.parse(message.data);

        // switch(parseData.ACTION_TYPE) {
        //     case
        // }
    }
}

const VideoCall = ({ URL, mediaOptions }) => {
    const [username, setUsername] = useState('');
    const [users, setUsers] = useState([]);
    
    const ws = useRef(null); // websocket => same as this.connection

    const localVideoRef = useRef(null);
    const localStreamRef = useRef(null);

    const remoteVideo = useRef(null);

    const peerRef = useRef(null);
    
    const otherUser = useRef(null);

    
    const senders = useRef([]) 

    let useField = '';
    let receiver = '';

    const eventListenersRef = useRef(new Map());
    const isOpenRef = useRef(false);
    const localIdRef = useRef(null);
    const clientsRef = useRef(new Map());
    const consumersRef = useRef(new Map());

    useEffect(() => {
        // const URL = `${window.location.protocol}://${window.location.hostname}:${window.location.pathname};` // from (simpleSFU)

        ws.current = new WebSocket(URL); // can we add a normal URL here via AWS Websocket API?
        
        ws.current.onmessage = (message) => handleMessageSocket(message);

        ws.current.onclose = () => handleCloseSocket();

        ws.current.onopen = (event) => {

            // this.trigger(_EVENTS.onConnected, event)
            if (eventListenersRef.current.has('onConnected')) {
                eventListenersRef.get('onConnected').forEach(callback => callback.call(event));
            }

            isOpenRef.current = true;
        }

        openUserMedia();
    }, [])

    function handleCloseSocket() {

    }

    // aka this.connect() function
    async function openUserMedia() { // same as connect line 302 and stream = localStreamRef
        try {
            if (localVideoRef.current) {
                localStreamRef.current = localVideoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(constraints); // add mediaOptions

                handleRemoteTrack(localStreamRef.current, )
            }
        } catch (error) {
            console.log('Error in openUserMedia: ', error);

        }
    }

    function removeUser({ id }) {
        const { usename, consumerId } = clientsRef.current.get(id);
        consumersRef.current.delete(consumerId);
        clientsRef.current.delete(id);

        // https://github.com/tiger2380/simple_sfu/blob/master/public/SimpleSFUClient.js
        // line 296
    }

    function handleMessageSocket({ data }) { // should go into Socket.tsx
        const message = JSON.parse(data);

        switch (message.ACTION_TYPE) {
            case 'welcome':
                localIdRef.current = message.id;

                // send to server
                break;
            case 'USER_LEFT':
                removeUser(message)
                break;
            default:
                console.error('handleMessageSocket Error');
                break;
        }
    }

  return (
    <div>VideoCall</div>
  )
}

export default VideoCall;

// client joins SFU server
    // SFU sends client's media stream to server
    // server creates a new media consumer for client's streams and sends it to all other peers
    // peers subscribe to the media consumer and receives client's meia stream

// client leaves SFU server
    // client's media stream is removed from server and other peers stop receiving stream