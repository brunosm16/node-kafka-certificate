import { makeKafkaClient } from '@/factories/kafka-client';
import { NextFunction, Request } from 'express';
import env from '@/config/env';

export default function (req: Request, next: NextFunction) {
  const { clientId, kafkaBrokers } = env;

  const brokers = kafkaBrokers.split(',') || [];

  const kafkaClient = makeKafkaClient(clientId, brokers);

  req.producer = kafkaClient.producer();

  return next();
}
