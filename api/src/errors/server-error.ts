export class ServerError extends Error {
  constructor(error: Error) {
    super('Internal Server Error');

    this.name = 'ServerError';

    const { stack } = error;

    if (stack) this.stack = stack;
  }
}
