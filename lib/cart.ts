import type { FinishId, Storage } from "./products";

export type CartItem = {
  id: string;
  productSlug: "iphone-17-pro-max";
  name: string;
  color: FinishId;
  storage: Storage;
  quantity: number;
  unitPrice: number;
};

export const CART_KEY = "nova-cart-v1";
