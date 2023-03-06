import 'module-alias/register';
import env from '@/config/env';
import { ServerError } from './errors/server-error';
import createKafkaConsumer from './factories/create-kafka-consumer';
import { logMessage } from './utils/log-message';
import { KafkaMessage, Producer } from 'kafkajs';
import createKafkaProducer from './factories/create-kafka-producer';
import { randomUUID } from 'crypto';

const sendMessage = (producer: Producer, message: KafkaMessage): void => {
  const { responseTopic: topic } = env;

  const { value } = message;

  const parsed = value ? JSON.parse(value.toString()) : '';

  producer.send({
    topic,
    messages: [
      {
        value: `Certificate generated : ${JSON.stringify(parsed)}`,
        key: randomUUID(),
      },
    ],
  });
};

const runConsumer = async (): Promise<void> => {
  try {
    const { certificateTopic: topic } = env;

    const consumer = createKafkaConsumer();
    const producer = createKafkaProducer();

    await producer.connect();

    await consumer.connect();

    await consumer.subscribe({ topic });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        logMessage(topic, partition, message);

        sendMessage(producer, message);
      },
    });
  } catch (err) {
    throw new ServerError(err);
  }
};

runConsumer().catch(console.error);
