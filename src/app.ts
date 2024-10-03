import express, { Request, Response } from 'express';
import { PhoneRoutes } from './modules/phones/phone.route';
import { OrderRoutes } from './modules/order/order.route';
const app = express();

app.use(express.json());

app.use('/api/products', PhoneRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Phone Lovers!');
});

export default app;
