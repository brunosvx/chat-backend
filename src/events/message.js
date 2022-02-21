import { validate as validateUuid } from 'uuid';

export const lastMessages = [];


export default function message(data, socket) {
    
    const { id, name, text } = data;

    if(!validateUuid(id) || !validateMessage(data)) return;

    socket.broadcast.emit("message", { name: name.trim(), text: text.trim(), id });
    
}

function validateMessage(data) {
    if(typeof data !== 'object') return false;

    const { id: messageId, name, text } = data;

    if(typeof name !== 'string' || typeof text !== 'string') return false;

    if(!lastMessages.every(({ id }) => id !== messageId)) return false;

    const nameLength = name.trim().length;
    const textLength = text.trim().length;

    if(nameLength <= 0 || nameLength > 20 || textLength <= 0 || textLength > 150) return false;

    return true;    
}