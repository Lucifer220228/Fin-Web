import express from 'express'
import orderRoutes from './routes/orderRoutes';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './middlewares/log';
const http = require('http');
import cors from 'cors';
import { MongoDB } from './config/MongoDB';
require('dotenv').config()
const app: express.Application = express()
const server = http.createServer(app);

export const DB = new MongoDB({
  name:process.env.DBUSER as string,
  password:process.env.DBPASSWORD as string,
  host:process.env.DBHOST as string,
  port:process.env.DBPORT as string,
  dbName:process.env.DBNAME as string
});

app.use(cors({
  
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
  "exposedHeaders": ['Content-Disposition']
}))

app.use('/api/orders', orderRoutes);
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: false }))
app.use('/assets', express.static(process.env.assetsPath as string));
app.use(errorHandler);

server.listen(process.env.PORT, () => {
  logger.info('listening on *:'+process.env.PORT);
});


export default app;