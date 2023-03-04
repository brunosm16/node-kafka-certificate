import { makeKafkaClient } from '@/factories/kafka-client';
import { NextFunction, Request } from 'express';

export default function (req: Request, next: NextFunction) {
  const kafkaClient = makeKafkaClient('clientId', ['kafka:9092']);

  const { body } = req;

  if (body) {
    req.body.producer = kafkaClient.producer();
  }

  return next();
}
