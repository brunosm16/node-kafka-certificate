import { KafkaMessage } from 'kafkajs';

export const logMessage = (
  topic: string,
  partition: number,
  { key, value, timestamp, offset }: KafkaMessage
): void => {
  console.log(
    `Topic: ${topic} | Partition: ${partition} | Offset: ${offset} | TimeStamp: ${timestamp}`
  );

  console.log(`Message Key : ${key}`);

  console.log(`Message value : ${value}`);
};
