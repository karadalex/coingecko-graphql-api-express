async function getCoinsListResolver(parent, args, context) {
  let endpoint = "https://api.coingecko.com/api/v3/coins/list"
  if (args.include_platform) {
    endpoint += "?include_platform=true"
  }
  const response = await fetch(endpoint)
  const responseData = await response.json()

  return responseData
}

module.exports = {
  getCoinsListResolver
}