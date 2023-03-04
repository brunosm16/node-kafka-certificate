import { Request, Response } from 'express';
import express from 'express';
import { ServerError } from '@/errors/server-error';

const routes = express.Router();

routes.post('/certificate', async (req: Request, res: Response) => {
  try {
    const { producer } = req;

    await producer.connect();

    return res.json({ ok: 'Route Certificate is OK' });
  } catch (err) {
    throw new ServerError(err);
  }
});

export default routes;
