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

   const email = req.query.email as string;
   console.log(email);

  const result = await orderServices.getOrders(email);
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
