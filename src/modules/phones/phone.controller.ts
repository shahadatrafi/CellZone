import { Request, Response } from 'express';
import { ProductServices } from './phone.service';
import { Error } from 'mongoose';

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

const updateProduct = async (req: Request, res: Response) => {
  const { productId } = req.params; // Extract productId from URL
  const productData = req.body; // Extract updated product data from request body

  try {
    const updatedProduct = await ProductServices.updateProduct(productId, productData); // Call service with the productId and new data
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    res.json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update product',
      error: error.message,
    });
  }
};


export const ProductControllers = {
  createProduct,
  getProducts,
  updateProduct,
};
