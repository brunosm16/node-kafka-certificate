import env from '@/config/env';
import { Kafka } from 'kafkajs';

export default function (): Kafka {
  const { kafkaBrokers, clientId, consumerGroup: groupId } = env;

  const brokers = kafkaBrokers.split(',') ?? [];

  const kafka = new Kafka({ clientId, brokers });

  return kafka;
}
