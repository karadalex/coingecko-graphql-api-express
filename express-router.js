const express = require('express')
const router = express.Router();
const coingeckoGraphql = require("./index")

router.all('/api/graphql', coingeckoGraphql)

module.exports = router;