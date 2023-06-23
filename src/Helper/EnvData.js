import dotenv from 'dotenv';
dotenv.config();

const envData = {
  port: process.env.PORT,
  dbType: process.env.DB_TYPE,
};

export default envData;
