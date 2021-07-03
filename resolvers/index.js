const coinsResolvers = require('./coinsResolvers')

const resolvers = {
  Query: {
    coins: coinsResolvers.getCoinsListResolver,
    markets: coinsResolvers.getCoinsMarkets
  },
}

module.exports = resolvers