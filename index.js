require('dotenv').config() 
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {
    checkDB,
    syncModels
    } = require('./database/index')
    
    const addRelations = require('./database/relations')


 const connectToDB= async () => {
    await checkDB()
    addRelations()
    await syncModels()
 }

const startServer = () => {
    try {
        
        const app = express()
        
        app.use(cors())
        app.use(morgan('dev'))
        app.use(express.json())
    
        app.get('/api', (req, res) => {
            res.send('Request recieved')
        })
        app.listen(process.env.PORT, () => {
            console.log(`Express started. Listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        throw new Error(error)
    }
}

;(async () => {
    await connectToDB()
    startServer()
})()