import { Message } from 'kafkajs';
import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';

export default function createKafkaMessages(amount = 1): Message[] {
  const users: Message[] = [];

  for (let i = 0; i < amount; i++) {
    const user = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };
    users.push({ value: JSON.stringify(user), key: randomUUID() });
  }

  return users;
}
