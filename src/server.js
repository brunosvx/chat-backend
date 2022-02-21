import { Server } from 'socket.io';

import message, { lastMessages } from './events/message.js';

const io = new Server(process.env.PORT || 3333, {
    cors: {
        origin: '*'
    }
})


const events = {
    message
}

io.on('connection', (socket) => {

    socket.emit('lastMessages', lastMessages)

    socket.onAny((eventName, data) => {
        events[eventName]?.(data, socket);
    })
})