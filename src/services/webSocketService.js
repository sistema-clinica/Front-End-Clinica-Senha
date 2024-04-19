import {BASE_URL} from "./axiosInstance";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

const socket = new SockJS(BASE_URL + "/websocket"); // URL do seu servidor WebSocket
export const stompClient = Stomp.over(socket);

stompClient.connect({}, (frame) => {
    console.log('Conectado: ' + frame);
});








