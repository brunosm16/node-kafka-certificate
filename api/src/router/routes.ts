import { Request, Response } from 'express';
import express from 'express';

const routes = express.Router();

routes.post('/certificate', async (req: Request, res: Response) => {
  return res.json({ ok: 'Route Certificate is OK' });
});

export default routes;
