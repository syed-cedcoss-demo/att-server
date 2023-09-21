import chalk from 'chalk';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import process from 'node:process';
import { Server } from 'socket.io';

import cedAttApp from './src/app.js';
import { dbConnection } from './src/config/dbConnection.js';
import cronJob from './src/services/cron.js';
import socket from './src/socket/socket.js';
import globalError from './src/validations/globalError.js';

const app = express();
const httpServer = createServer(app);
dotenv.config();

// database connect
dbConnection();

// cron job register
cronJob();

const io = new Server(httpServer, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:5173']
  }
});

// socket instance
socket(io);

// our setup app
cedAttApp(app);

const port = process.env.PORT ?? 3002;

const server = httpServer.listen(port, () => {
  console.log('----------------------------------------------');
  console.log(chalk.green.bold(`server is up and running on post ${port}`));
  console.log(chalk.blue.bold('Note:'), `Server is running on ${process.env.NODE_ENV} mode`);
  console.log('start server in production mode, add/replace NODE_ENV=production');
  console.log('----------------------------------------------');
});

// global error handler
globalError(server);
