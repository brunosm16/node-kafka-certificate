import dotenv from 'dotenv';

dotenv.config();

export default {
  clientId: process.env.CLIENT_ID ?? 'certificate-client',
  kafkaBrokers: process.env.KAFKA_BROKERS ?? 'kafka:9092',
  certificateTopic: process.env.CERTIFICATE_LIST_TOPIC ?? '',
  consumerGroup: process.env.CONSUMER_GROUP ?? '',
  responseTopic: process.env.CERTIFICATE_TOPIC_RESPONSE ?? '',
};
