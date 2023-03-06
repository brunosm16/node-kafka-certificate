import { makeKafkaClient } from '@/factories/kafka-client';
import { NextFunction, Request } from 'express';

export default function (req: Request, next: NextFunction) {
  const kafkaClient = makeKafkaClient();

  req.producer = kafkaClient.producer();

  return next();
}
