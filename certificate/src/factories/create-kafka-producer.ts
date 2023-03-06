import { Producer } from 'kafkajs';
import createKafkaClient from './create-kafka-client';

export default function (): Producer {
  return createKafkaClient().producer();
}
