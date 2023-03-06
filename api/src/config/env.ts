import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT ?? '3333',
  clientId: process.env.CLIENT_ID ?? 'my-client',
  kafkaBrokers: process.env.KAFKA_BROKERS ?? 'kafka:9092',
  certificateTopic: process.env.CERTIFICATE_LIST_TOPIC ?? '',
  consumerGroup: process.env.CONSUMER_GROUP ?? '',
  certificateResponseTopic: process.env.CERTIFICATE_TOPIC_RESPONSE ?? '',
};
