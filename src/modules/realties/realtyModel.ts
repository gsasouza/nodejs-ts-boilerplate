import { Document, Schema, Model, model } from "mongoose";
import { Realty as IRealty } from "../../interfaces";

export interface RealtyModel extends IRealty, Document {}

const RealtySchema: Schema = new Schema(
  {
    code: {
      type: String,
      unique: true,
    },
    name: {
      type: String
    },
    price: {
      type: String
    },
    address: {
      cep: {
        type: String
      },
      publicPlace: {
        type: String
      },
      number: {
        type: String
      },
      neighborhood: {
        type: String
      },
      city: {
        type: String
      },
      uf: {
        type: String
      },
      complement: {
        type: String
      }
    },
    quantBedroom: {
      type: Number
    },
    usefulArea: {
      type: Number
    },
    quantBathroom: {
      type: Number
    },
    quantGarages: {
      type: Number
    },
    quantSuite: {
      type: Number
    }
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  }
);

export const Realty: Model<RealtyModel> = model<RealtyModel>(
  "Realty",
  RealtySchema
);
