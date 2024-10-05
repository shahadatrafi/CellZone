import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = new Order(payload);
  result.save();
  return result;
};

const getOrders = async (email: string) => {
  if (!email) {
    const result = await Order.find();
    return result;
  }

  // console.log(`email form service ${email}`);

  const result = await Order.find({ $or: [{ email: email }] });
  return result;
};

export const orderServices = {
  createOrder,
  getOrders,
};
