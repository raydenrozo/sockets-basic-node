let socket = io();
// escuchar eventos
socket.on('connect', () => {
    console.log(`Conectado al servidor`);
});
// escuchar eventos
socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor....')
});
// emitir eventos
socket.emit('enviarMensaje', {
    user: 'Jonathan',
    message: 'Hola Mundo'
}, (resp) => {
    console.log('Respuesta desde el servidor', resp);
});

// escuchar eventos
socket.on('enviarMensaje', (message) => {
    console.log(message);
});