const gql = require('apollo-server-micro').gql

const typeDefs = gql`
  type Coin {
    id: String,
    name: String,
    symbol: String,
    platforms: JSON
  }

  type Market {
    id: String,
    symbol: String,
    name: String,
    image: String,
    current_price: Int,
    market_cap: BigInt,
    market_cap_rank: Int,
    fully_diluted_valuation: BigInt,
    total_volume: BigInt,
    high_24h: Int,
    low_24h: Int,
    price_change_24h: Float,
    price_change_percentage_24h: Float,
    market_cap_change_24h: BigInt,
    market_cap_change_percentage_24h: Float,
    circulating_supply: BigInt,
    total_supply: BigInt,
    max_supply: BigInt,
    ath: Float,
    ath_change_percentage: Float,
    ath_date: String,
    atl: Float,
    atl_change_percentage: Float,
    atl_date: String,
    roi: String,
    last_updated: String
  }
`

module.exports = typeDefs