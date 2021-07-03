// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import coingeckoGraphql from '../../../../index'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async (req, res) => {
  await coingeckoGraphql(req, res)
}
