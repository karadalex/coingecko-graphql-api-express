// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const ExpressPlugin = require('fastify-express')
const coingeckoGraphqlRouter = require("../../express-router")


// Run the server!
const start = async () => {
  await fastify.register(require('fastify-express'))
  fastify.use(coingeckoGraphqlRouter)

  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()