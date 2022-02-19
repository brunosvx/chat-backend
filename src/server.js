import { Server } from 'socket.io';

import message from './events/message.js';

const io = new Server(3333, {
    cors: {
        origin: '*'
    }
})


const events = {
    message
}

io.on('connection', (socket) => {
    console.log('socket connected ->', socket.id);

    socket.onAny((eventName, data) => {
        events[eventName]?.(data, socket);
    })
})