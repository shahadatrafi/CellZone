import { Request, Response } from 'express';
import { orderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await orderServices.createOrder(orderData);
  res.json({
    success: true,
    message: 'Order created successfully!',
    data: result,
  });
};

const getOrders = async (req: Request, res: Response) => {
  const result = await orderServices.getOrders();
  res.json({
    success: true,
    message: 'Orders fetched successfully!',
    data: result,
  });
};

export const orderControllers = {
  createOrder,
  getOrders
};
