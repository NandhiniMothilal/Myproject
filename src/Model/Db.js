// packages
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'
// Helper
import EnvData from '../Helper/EnvData.js'

const connectDatabase = async () => {
    const { connectionType, dbUrl } = EnvData
    let connectionResult
    if (connectionType === 'raw') {
        const client = new MongoClient(dbUrl)
        connectionResult = await client.connect()
    } else {
        connectionResult = await mongoose.connect(dbUrl)
    }
    if (connectionResult) {
        console.log('Mongodb connection created successfully')
    } else {
        console.log('Error occurred in mongodb connection')
    }
}

connectDatabase()
