export class AppError {
  message: string;

  constructor(message: string, statusCode: number) {
    this.message = message;
  }
}

