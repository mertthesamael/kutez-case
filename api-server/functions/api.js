const express = require('express')
const serverlss = require("serverless-http")
const app = express()
const router = express.Router()
const cors = require('cors')
app.use(cors())
router.get("/", (req,res) => {
    res.json({
        'product_types':[{'key':1, 'value':'Cotton','quantity':100},{'key':2, 'value':'Linen','quantity':100}]
    })
})

app.use("/",router)
module.exports.handler = serverlss(app)