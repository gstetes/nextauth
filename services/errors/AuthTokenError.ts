export class authTokenError extends Error {
  constructor() {
    super('Erro with authentication token.');
  }
};