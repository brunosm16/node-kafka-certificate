import env from '@/config/env';
import { Consumer, Kafka } from 'kafkajs';
import createKafkaClient from './create-kafka-client';

export default function (): Consumer {
  const { consumerGroup: groupId } = env;
  const kafka = createKafkaClient();

  const consumer = kafka.consumer({ groupId });

  return consumer;
}
