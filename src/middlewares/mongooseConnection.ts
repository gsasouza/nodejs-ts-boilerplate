import * as mongoose from 'mongoose';
import { mongoUrl } from '../config';
import { NextFunction, Request, Response } from 'express';
import { Readable } from 'stream';
(<any>mongoose).Promise = global.Promise;

const connectDatabase = (uri: string) =>
  new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', (error: Error) => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve());
    mongoose.connect(uri, { useMongoClient: true });
  });

export const mongooseConnection = (): any => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await connectDatabase(mongoUrl);
  } catch (err) {
    throw err;
  }
  next();
};
