import 'module-alias/register';
import express from 'express';
import startServer from '@/utils/start-server';
import setKafkaClient from './utils/set-kafka-client';

const app = express();

app.use((req, res, next) => setKafkaClient(req, next));

startServer(app).catch(console.error);
