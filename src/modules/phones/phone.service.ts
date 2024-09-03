import { TProduct } from './phone.interface';
import { Phone } from './phone.model';

const createProduct = (payload: TProduct) => {
  const result = new Phone(payload);
  result.save();
  return result;
};

export const ProductServices = {
  createProduct,
};
