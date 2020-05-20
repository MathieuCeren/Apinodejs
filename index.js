'use strict';

const Hapi = require('@hapi/hapi');

// Fonction asynchrone, tout le framework hapi est en async
const init = async () => {
    // création d'un serveur sur le port 3000 en localhost
    const server = Hapi.server({
        port: 3000,
        routes: {
            cors: true
        },
        host: 'localhost'
    });
    
    server.route(require('./routes/getAllContent'));
    server.route(require('./routes/getGender'));
    server.route(require('./routes/getValidations'));
    server.route(require('./routes/getStations'));
    server.route(require('./routes/getAllServices'));

    await server.start();
    console.log('Server running on %s', server.info.uri);
};
// Remontée d'une erreur
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});
// J'éxecute la fonction init
init();