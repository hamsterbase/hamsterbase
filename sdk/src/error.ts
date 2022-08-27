export class HttpError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
  }
}

export const enum ErrorCodes {
  E0001 = 'E0001',
}

export class ResponseError extends Error {
  constructor(public code: ErrorCodes, public message: string) {
    super(message);
  }
}
