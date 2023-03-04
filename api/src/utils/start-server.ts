import { Express } from 'express';
import env from '@/config/env';
import { ServerError } from '@/errors/server-error';

export default async function (app: Express) {
  try {
    const { port } = env;
    app.listen(port, () =>
      console.log(`Server started and running at port : ${port}`)
    );
  } catch (err) {
    throw new ServerError(err);
  }
}
