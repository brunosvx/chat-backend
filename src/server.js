import { Server } from 'socket.io';

const io = Server(3333, {
    cors: {
        origin: '*'
    }
})