require('dotenv').config() 

const {
    checkDB,
    syncModels
    } = require('./database/index')
    
    const addRelations = require('./database/relations')


 const start = async () => {
    await checkDB()
    addRelations()
    syncModels()
 }
    start()