import 'module-alias/register';
import express from 'express';
import startServer from '@/utils/start-server';
import setKafkaClient from '@/utils/set-kafka-client';
import routes from '@/router/routes';

const app = express();

app.use((req, res, next) => setKafkaClient(req, next));
app.use(routes);

startServer(app).catch(console.error);
