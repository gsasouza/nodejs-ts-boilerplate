import { Request, Response, NextFunction } from "express";
import { Realty } from "../realtyModel";

export const createRealty = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    await new Realty(req.body).save();
    res.status(201).json({
      status: 201,
      message: 'Realty successfully created!'
    });
  } catch (err) {
    next(err);
  }
};
