const ApolloServer = require('apollo-server-micro').ApolloServer
const gql = require('apollo-server-micro').gql

const typeDefs = gql`
  type Query {
    tokens: [Token!]!
  }
  type Token {
    name: String,
    symbol: String
  }
`

const resolvers = {
  Query: {
    tokens(parent, args, context) {
      return [
        { name: 'bitcoin', symbol: 'BTC' },
        { name: 'ethereum', symbol: 'ETH' },
      ]
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

module.exports = apolloServer.createHandler({ path: '/api/graphql' })