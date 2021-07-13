const fastify = require('fastify')({logger:true});
fastify.register(require('fastify-cors'), { 
    // put your options here
  });
//http://localhost:5000/docs  - You can find the API Documentation
fastify.register(require('fastify-swagger'),{
    exposeRoute:true,
    routePrefix:'/docs',
    swagger:{
        info:{title:'fastify-api'}
    }
})
fastify.register(require('./routes/itemsRoute'));
const start = async()=>{
    try {
        await fastify.listen(5000);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
start();
module.exports = fastify;