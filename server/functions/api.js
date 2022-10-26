const express = require('express')
const serverlss = require("serverless-http")
const app = express()
const router = express.Router()

router.get("/", (req,res) => {
    res.json({
        'product_types':[{'key':1, 'value':'Cotton'},{'key':2, 'value':'Linen'}]
    })
})

app.use("/",router)
module.exports.handler = serverlss(app)