export interface Realty {
  code?: string;
  name?: string;
  price?: string;
  adress?: {
    publicPlace?: string;
    cep?: string;
    number?: string;
    city?: string;
    neighborhood?: string;
    uf?: string;
    complement?: string;
  };
  quantBedroom?: number;
  usefulArea?: number;
  quantBathroom?: number;
  quantGarages?: number;
  quantSuite?: number;
  createdAt: Date,
  updatedAt: Date
}
