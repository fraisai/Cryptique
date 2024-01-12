import React, { useEffect, useRef, createElement } from 'react';
import createConsumerId from './util/createUuid';
import configuration from './constants/rtcConfiguration.ts';

const constraints = {
    video: {
      width: { min:640, ideal:1920, max:1920 },
      height: { min:480, ideal:1080, max:1080 },
    },
    // audio: true
    audio: {
      echoCancellation: true
    }
};
  
const SFUVideoConference = ({ URL }) => {
    const wsConnectionRef = useRef(null); // websocket 
    const localVideoRef = useRef(null); // local peer's video src
    const localStreamRef = useRef(null);


    const eventListenersRef = useRef(new Map());

    const remoteContainerRef = useRef(null); // React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts. ref updates happen before componentDidMount or componentDidUpdate lifecycle methods.
    const inputUsernameRef = useRef(null); // ref for input element for username
    const joinMeetingBtnRef = useRef(null); // ref for "Join Meeting" button
    const newlyCreatedVideoRef = useRef(null); // ref for newly created video in createVideoElement function
    // createComsumTransport function:
    
    const clientsRef = useRef(new Map()); // seracj fpr this.clients
    const consumersRef = useRef(new Map()); // search for this.consumers

    const userVideoRef = useRef(null);


    const localPeerRef = useRef(null)

    const streamRef = useRef(null);

    // contains peerId from websocket
    const localUUID = useRef('');

    useEffect(() => {
        // wss://www.example.com/socketserver.
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        // const url = `${protocol}://${window.location.hostname}:${this.settings.port}`;

        // remoteContainerRef.current = document.querySelector('#remote_videos');
        console.log('useEffect', remoteContainerRef.current, "url: ", protocol)

        
        wsConnectionRef.current = new WebSocket(URL)

    }, [])

    function handleConnectBtn() {
        // const connectBtn = document.querySelector('#connect');
        const connectBtn = joinMeetingBtnRef.current;

        console.log('handleConnect', joinMeetingBtnRef.current)
        connectBtn.disabled = true;
        connect();
    }

    function createPeer() {
        localPeerRef.current = new RTCPeerConnection(configuration);
        return localPeerRef.current;
    }

    async function connect() {
        streamRef.current = localVideoRef.current.srcObject = await navigator.mediaDevices.getUserMedia(constraints);

        handleRemoteTrack(streamRef.current, username.value); // should it be handleRemoteTrack(streamRef.current, inputUsernameRef.current.value)?
        localStreamRef.current = streamRef.current;

        localPeerRef.current = createPeer();

        localStreamRef.current.getTracks().forEach(track => localPeerRef.current.addTrack(track, localStreamRef.current))
        console.log('connect()', 'username.value', username.value, localStreamRef.current); // should username.value = inputUsernameRef.current.value?


    }

    async function subscribe() {
        const subscribePayload = {
            type: "GET_PEERS",
            uqid: localUUID.current
        }

        wsConnectionRef.current.send(JSON.stringify(subscribePayload));
    }

    async function createConsumerTransport(peer) {
        console.log('createConsumerTransport', peer)

        const consumerId = createConsumerId();
        const consumerTransport = new RTCPeerConnection(configuration);

        consumerTransport.id = consumerId;
        consumerTransport.peer = peer;

        clientsRef.current.get(peer.peerId).consumerId = consumerId;
        consumersRef.current.set(consumerId, consumerTransport);

        // consumersRef.current.get(consumerId).addTransceiver('video', { direction: "recvonly"});
        // consumersRef.current.get(consumerId).addTransceiver('audio', { direction: "recvonly"});
        // https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction
        // addTransceiver(kind, ) = Creates a new RTCRtpTransceiver and adds it to the set of transceivers associated with the connection. Each transceiver represents a bidirectional stream, with both an RTCRtpSender and an RTCRtpReceiver associated with it. 
            // recvonly = Transceiver offers to receive but not set RTP data: RTCRtpSender: Does not offer to send RTP data, and will not do so. RTCRtpReceiver: Offers to receive RTP data, and will do so if the remote peer offers.

    
        // const consumerOffer = await consumersRef.current.get(consumerId).createOffer();
        // await consumersRef.current.get(consumerId).setLocalDescription(consumerOffer);

        // consumersRef.current.get(consumerId).onicecandidate = (e) => handleConsumerIceCandidate(e, peer.id, consumerId);

        // consumersRef.current.get(consumerId).ontrack = (e) => {
        //     streamsRef.current = e.streams[0];
        //     handleRemoteTrack(e.streams[0], peer.username, consumerId);
        // }
        return consumerTransport;
    }

    function handleConsumerIceCandidate(e, id, consumerId) {
        console.log('handleConsumerIceCandidate', peer)

        const { candidate } = e;

        try {
            if (candidate && candidate.candidate && candidate.candidate.length > 0) {
                const consumerIcePayload = {
                    ACTION_TYPE: 'CONSUMER_ICE',
                    ice: candidate,
                    uqid: id, 
                    consumerId
                }
    
                wsConnectionRef.current.send(JSON.stringify(consumerIcePayload));
            }
    
        } catch (error) {
            console.log('Error in handleConsumerIceCandidate', error);
        }
    }


    function createVideoElement(username, remoteStream, consumerId) { // username = input field username
        // newlyCreatedVideoRef.current = createElement('video');
        // newlyCreatedVideoRef.current.id = `remote_${consumerId}`;
        newlyCreatedVideoRef.current = remoteStream; // should it just be stream instead?

        console.log("createVideoElement()", newlyCreatedVideoRef.current);

        // newlyCreatedVideoRef.current.autoplay = true;

        // newlyCreatedVideoRef.current.muted = (username === username.value);

        return newlyCreatedVideoRef.current;
    }


    /**
     * 
     * @param {*} stream 
     * @param {*} inputFieldName 
     * @param {*} consumerId 
     * @returns 
     */
    async function handleRemoteTrack(stream, inputFieldName, consumerId) {
        console.log("handleRemoteTrack", "userVideoRef.current:", userVideoRef.current);
        return;
    
        // EDIT: 
        // this.recalculateLayout();
    }


    function createVideoWrapper() {

    }

    function createDisplayName(displayUsername) {
        // const nameContainer = createElement('div', { className: ''});


        // const nameContainer = document.createElement('div');
        // nameContainer.classList.add('display_name')
        // const textNode = document.createTextNode(username);
        // nameContainer.appendChild(textNode);
        // return nameContainer;

    }

    function handleMessage({ data }) {
        const message = JSON.parse(data);

        switch (message.type) {
            case 'WELCOME':
                localUUID.current = message.peerId;
                break;
            default:
                console.log('error in handleMessage in SFUVideoConference');
                break;
            // case 'answer':
            //     this.handleAnswer(message);
            //     break;
            // case 'peers':
            //     this.handlePeers(message);
            //     break;
            // case 'consume':
            //     this.handleConsume(message)
            //     break
            // case 'newProducer':
            //     this.handleNewProducer(message);
            //     break;
            // case 'user_left':
            //     this.removeUser(message);
            //     break;
        }
    }

    const videosInnerVideoWrapVideo ={
        // position: 'absolute',
        // top: '0',
        // left: '0',
        width: '25%',
        // height: '100%',
        // -o-object-fit: 'cover',
        // object-fit: 'cover',
    }

    const videoInnerVideoWrap = {
        height: '25%',
        position: 'relative',
        // -ms-flex-negative: 1;
        flexShrink: '1',
        // -ms-flex-preferred-size: 31%;
        flexBasis: '31%',
        webkitBoxFlex: 'var(--grow)',
            // -ms-flex-positive: var(--grow);
        flexGrow: 'var(--grow)'
    }

    const videosInner = {
        width: '100%',
        height: '100%',
        padding: '10%',
        display: '-webkit-box',
        display: '-ms-flexbox',
        display: 'flex',
        // -webkit-box-pack: justify;
        //     -ms-flex-pack: justify;
        justifyContent: 'space-between',
        // -ms-flex-wrap: wrap;
        flexWrap: 'wrap',
        gap: '1.2rem'
    }


  
  return (
    <>
        <div style={{margin: 'auto 0', textAlign: 'center' }}>
            <input type="text" id="username" placeholder="Enter your username" ref={inputUsernameRef} />
            <button onClick={handleConnectBtn} id='connect' ref={joinMeetingBtnRef}>Join Meeting</button>
        </div>

        <div id="remote_videos" style={{ width: '100%', height: '100%', margin: '20px auto'}}>
            <div className="videos-inner" style={videosInner}>
                    <video ref={localVideoRef} controls autoPlay style={videosInnerVideoWrapVideo} >
                    </video>

                <div className="video-wrapper" style={ videoInnerVideoWrap }>
                </div>
            </div>    
        </div>

    </>
  )
}

export default SFUVideoConference