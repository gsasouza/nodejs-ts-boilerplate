import { Request, Response, NextFunction } from "express";
import { Realty } from "../realtyModel";

export const getAllRealties = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { limit, offset } = req.query;
    const realties = await Realty.find()
      .skip(offset)
      .limit(limit);
    res.status(200).json({
      status: 200,
      message: "Realties successfully loaded!",
      data: realties
    });
  } catch (err) {
    next(err);
  }
};

export const getOneRealty = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { id } = req.params;
    const realty = await Realty.findOne({ _id: id });
    if (!realty) {
      const notFound = new Error();
      notFound.name = 'NotFound';
      next(notFound);
    }
    res.status(200).json({
      status: 200,
      message: "Realty successfully loaded!",
      data: realty
    });
  } catch (err) {
    next(err);
  }
};
