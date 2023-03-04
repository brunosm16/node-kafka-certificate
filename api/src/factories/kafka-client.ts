import { Kafka } from 'kafkajs';

export const makeKafkaClient = (clientId: string, brokers: string[]): Kafka => {
  return new Kafka({ clientId, brokers });
};
