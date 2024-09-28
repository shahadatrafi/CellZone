import { TProduct } from './phone.interface';
import { Phone } from './phone.model';

const createProduct = (payload: TProduct) => {
  const result = new Phone(payload);
  result.save();
  return result;
};

const getProducts = async () => {
  const result = await Phone.find();
  return result;
};

export const ProductServices = {
  createProduct,
  getProducts,
};
