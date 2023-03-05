import { Request, Response } from 'express';
import express from 'express';
import { ServerError } from '@/errors/server-error';
import env from '@/config/env';
import { CompressionTypes } from 'kafkajs';
import createKafkaMessages from '@/utils/create-fake-messages';

const routes = express.Router();

routes.post('/certificate', async (req: Request, res: Response) => {
  try {
    const { certificateTopic } = env;

    const { producer } = req;

    const messages = createKafkaMessages();

    await producer.connect();

    const response = await producer.send({
      topic: certificateTopic,
      compression: CompressionTypes.GZIP,
      messages,
    });

    return res.json({ response });
  } catch (err) {
    throw new ServerError(err);
  }
});

export default routes;
