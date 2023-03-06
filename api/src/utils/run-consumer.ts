import { makeKafkaClient } from '@/factories/kafka-client';
import env from '@/config/env';

export const runConsumer = async (): Promise<void> => {
  const { consumerGroup: groupId, certificateResponseTopic: topic } = env;

  const kafka = makeKafkaClient();

  const consumer = kafka.consumer({ groupId });

  await consumer.connect();

  await consumer.subscribe({ topic });

  console.log('Consumer started');

  await consumer.run({
    eachMessage: async ({ message }) => {
      const { value } = message;
      const parsed = JSON.stringify(value?.toString());
      console.log('Received Certificate : ', parsed);
    },
  });
};
