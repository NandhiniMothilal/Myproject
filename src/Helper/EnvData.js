import dotenv from 'dotenv'
dotenv.config()

const envData = {
    port: process.env.PORT,
    dbType: process.env.DB_TYPE,
    connectionType: process.env.CONNECT_TYPE,
    dbUrl: process.env.DB_URL,
}

export default envData
