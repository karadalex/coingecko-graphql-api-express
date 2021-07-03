const gql = require('apollo-server-micro').gql

const typeDefs = gql`
  type Coin {
    id: String,
    name: String,
    symbol: String,
    platforms: JSON
  }
`

module.exports = typeDefs