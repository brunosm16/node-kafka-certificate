import 'module-alias/register';
import env from '@/config/env';
import { ServerError } from './errors/server-error';
import createKafkaConsumer from './factories/create-kafka-consumer';
import { logMessage } from './utils/log-message';

const runConsumer = async (): Promise<void> => {
  try {
    const { certificateTopic: topic } = env;

    const consumer = createKafkaConsumer();

    await consumer.connect();

    await consumer.subscribe({ topic });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        logMessage(topic, partition, message);
      },
    });
  } catch (err) {
    throw new ServerError(err);
  }
};

runConsumer().catch(console.error);
