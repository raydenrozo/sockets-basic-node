const { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario conectado');

    // emitir eventos
    client.emit('enviarMensaje', {
        user: 'Administrador',
        message: 'Bienvenido al chat'
    });

    // escuchar eventos
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (message.user) {
        //     callback({
        //         resp: 'todo salio bien...'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salio mal!!!!!'
        //     });
        // }


    });
});
