const gql = require('apollo-server-micro').gql
const coinsDefs = require('./coinsDefs')

const indexDefs = gql`
  scalar JSON
  scalar BigInt

  type Query {
    coins(include_platform: Boolean): [Coin!]!,
    markets(vs_currency: String!): [Market!]!
  }
`

module.exports = [
  indexDefs, coinsDefs
]