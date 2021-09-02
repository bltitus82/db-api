require('dotenv').config()
const express = require("express")
const { Sequelize } = require('sequelize/types')
const app = express()
const { sequelize } = require("./db")

; (async() => {
    try{
        await sequelize.authenticate();
        console.log('yay');
    } catch (error) {
        console.error('you suck', error);
    }
})()


const port = 3000
const auth = require('./controllers/Auth')

app.use('/', auth)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})