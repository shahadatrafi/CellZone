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

const updateProduct = async (productId: string, productData: TProduct) => {

  // Assuming you are using a model like `Product` for database operations
  const product = await Phone.findById(productId);

  if (!product) {
    throw new Error('Product not found');
  }

  // Update product fields with new data from productData
  Object.assign(product, productData);

  // Save the updated product back to the database
  const updatedProduct = await product.save();

  return updatedProduct;
};


export const ProductServices = {
  createProduct,
  getProducts,
  updateProduct
};
