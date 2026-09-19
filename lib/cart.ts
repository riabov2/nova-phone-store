import type { ColorId, Storage } from "./products";

export type CartItem = {
  id: string;
  productSlug: "iphone-17";
  name: string;
  color: ColorId;
  storage: Storage;
  quantity: number;
  unitPrice: number;
};

export const CART_KEY = "nova-cart-v1";
