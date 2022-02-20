import { Server } from 'socket.io';

import message from './events/message.js';

const io = new Server(process.env.PORT || 3333, {
    cors: {
        origin: '*'
    }
})

console.log('--------- PORTA:', process.env.PORT || 3333);


const events = {
    message
}

io.on('connection', (socket) => {
    console.log('socket connected ->', socket.id);

    socket.onAny((eventName, data) => {
        events[eventName]?.(data, socket);
    })
})