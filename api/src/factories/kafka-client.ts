import env from '@/config/env';
import { Kafka } from 'kafkajs';

export const makeKafkaClient = (): Kafka => {
  const { clientId, kafkaBrokers } = env;

  const brokers = kafkaBrokers.split(',') || [];

  return new Kafka({ clientId, brokers });
};
