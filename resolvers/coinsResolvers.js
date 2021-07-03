async function getCoinsListResolver(parent, args, context) {
  let endpoint = "https://api.coingecko.com/api/v3/coins/list"
  if (args.include_platform) {
    endpoint += "?include_platform=true"
  }
  const response = await fetch(endpoint)
  const responseData = await response.json()

  return responseData
}

async function getCoinsMarkets(parent, args, context) {
  let endpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${args.vs_currency}`
  const response = await fetch(endpoint)
  const responseData = await response.json()

  return responseData
}

module.exports = {
  getCoinsListResolver,
  getCoinsMarkets
}