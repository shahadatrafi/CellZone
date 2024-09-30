import { model, Schema } from 'mongoose';
import {
  TProduct,
  TProductInventory,
  TProductVariant,
} from './phone.interface';

const ProductVariantSchema = new Schema<TProductVariant>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const ProductInventorySchema = new Schema<TProductInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
});

const ProductSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: [{ type: String }],
  variants: [ProductVariantSchema],
  inventory: ProductInventorySchema,
});

export const Phone = model<TProduct>('Phone', ProductSchema);
