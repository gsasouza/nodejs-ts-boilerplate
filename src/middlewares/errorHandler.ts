import { NextFunction, Request, Response } from "express";
import { MongoError } from "mongodb";
import { ErrorTypes } from "../interfaces";

const mongoError = (res: Response, err: MongoError) => {
  if (err.code === 11000) return alreadyRegistered(res);
  return unexpected(res, err);
};

const alreadyRegistered = (res: Response) => {
  res.status(409).json({
    status: 409,
    message: "ERROR: Already registered"
  });
};

const notFound = (res: Response, err: ErrorEventHandler) => {
  res.status(404).json({
    status: 404,
    message: "ERROR: Not found"
  });
};

function unexpected(res: Response, err: ErrorEventHandler | MongoError) {
  res.status(500).json({
    status: 500,
    message: "ERROR: Unexpected Server"
  });
}

export const errorHandler = (): any => async (
  err: ErrorEventHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorTypes: ErrorTypes = {
    MongoError: mongoError,
    NotFound: notFound
  };
  if (errorTypes[err.name]) return errorTypes[err.name](res, err);
  return unexpected(res, err);
};
