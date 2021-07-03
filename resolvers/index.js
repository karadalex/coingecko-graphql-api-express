const coinsResolvers = require('./coinsResolvers')

const resolvers = {
  Query: {
    coins: coinsResolvers.getCoinsListResolver,
  },
}

module.exports = resolvers