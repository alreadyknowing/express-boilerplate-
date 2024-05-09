import express from 'express'
require('./lib/middleware/group')

import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import sequelize from './config/database'
import cors from 'cors'

var app = express()
let routerV1 = require('./routes/v1/index')
let routerV2 = require('./routes/v2/index')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//connect database
sequelize.sync()

//v1
app.group('/api/v1', (router) => {
    routerV1(router)
})

//v2
app.group('/api/v2', (router) => {
    routerV2(router)
})

app.listen(process.env.PORT || '3000')
module.exports = {
    app,
}
