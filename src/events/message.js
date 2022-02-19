
export default function message(data, socket) {
    console.log('func')
    
    if(!validateMessage(data)) return;
    console.log('validate');

    const { name, text } = data;

    socket.broadcast.emit("message", { name: name.trim(), text: text.trim() });
    
}

function validateMessage(data) {
    if(typeof data !== 'object') return false;

    const { name, text } = data;

    if(typeof name !== 'string' || typeof text !== 'string') return false;

    const nameLength = name.trim().length;
    const textLength = text.trim().length;

    if(nameLength <= 0 || nameLength > 20 || textLength <= 0 || textLength > 150) return false;

    return true;    
}