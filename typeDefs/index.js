const gql = require('apollo-server-micro').gql
const coinsDefs = require('./coinsDefs')

const indexDefs = gql`
  scalar JSON

  type Query {
    coins(include_platform: Boolean): [Coin!]!
  }
`

module.exports = [
  indexDefs, coinsDefs
]