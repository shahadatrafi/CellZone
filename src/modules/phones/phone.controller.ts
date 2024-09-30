import { Request, Response } from 'express';
import { ProductServices } from './phone.service';

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};

const getProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getProducts();
  res.json({
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
};

const getSingleProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.getSingleProduct(productId);
  if (!result) {
    return res.status(400).json({
      success: false,
      message: 'Product not found',
    });
  }
  res.json({
    success: true,
    message: 'Product fetched successfully!',
    data: result,
  });
};

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params; // Extract productId from URL
  const productData = req.body; // Extract updated product data from request body

  const result = await ProductServices.updateProduct(productId, productData); // Call service with the productId and new data
  if (!result) {
    return res.status(404).json({
      success: false,
      message: 'Product not found',
    });
  }
  res.json({
    success: true,
    message: 'Product updated successfully!',
    data: result,
  });
};

const deleteProduct = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const result = await ProductServices.deleteProduct(productId);
  if (!result) {
    return res.status(400).json({
      success: false,
      message: 'Product deletion failed. Please try again ',
    });
  }
  res.json({
    success: true,
    message: 'Product deleted successfully!',
    data: result,
  });
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
