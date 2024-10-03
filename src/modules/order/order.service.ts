import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = new Order(payload);
  result.save();
  return result;
};

const getOrders = async () => {
    const result = await Order.find();
    return result
}

export const orderServices = {
  createOrder,
  getOrders
};
