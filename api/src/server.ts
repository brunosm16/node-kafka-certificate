import 'module-alias/register';
import express from 'express';
import startServer from '@/utils/start-server';

const app = express();

startServer(app).catch(console.error);
