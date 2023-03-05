import env from '@/config/env';
import { Consumer, Kafka } from 'kafkajs';

export default function (): Consumer {
  const { kafkaBrokers, clientId, consumerGroup: groupId } = env;

  const brokers = kafkaBrokers.split(',') ?? [];

  const kafka = new Kafka({ clientId, brokers });

  const consumer = kafka.consumer({ groupId });

  return consumer;
}
