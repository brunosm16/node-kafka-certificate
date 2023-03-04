import { Producer } from 'kafkajs';

declare global {
  namespace Express {
    export interface Request {
      producer: Producer;
    }
  }
}
