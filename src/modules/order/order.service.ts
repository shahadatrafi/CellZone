import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payload: TOrder) => {
  const result = new Order(payload);
  result.save();
  return result;
};

export const orderServices = {
  createOrder,
};
