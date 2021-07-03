const ApolloServer = require('apollo-server-micro').ApolloServer
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')


const apolloServer = new ApolloServer({ typeDefs, resolvers })

module.exports = apolloServer.createHandler({ path: '/api/graphql' })