import express from 'express';
import { ProductControllers } from './phone.controller';
const router = express.Router();

router.post('/', ProductControllers.createProduct);
router.get('/', ProductControllers.getProducts);
router.get('/:productId', ProductControllers.getSingleProduct);
router.put('/:productId', ProductControllers.updateProduct);
export const PhoneRoutes = router;
