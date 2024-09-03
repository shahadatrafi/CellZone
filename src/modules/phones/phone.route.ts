import express from 'express';
import { ProductControllers } from './phone.controller';
const router = express.Router();

router.post('/', ProductControllers.createProduct);

export const PhoneRoutes = router;
