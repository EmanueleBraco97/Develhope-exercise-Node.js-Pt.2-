const fastify = require('fastify') ({
    logger: true
});

fastify.get('/',(request,reply) => {
    reply.send({data: 'Ciao, sto creando un server con Fastify'});
});

try{
    fastify.listen({port: 3000});
}catch(error) {
    fastify.log.error(error);
    process.exit(1)
};