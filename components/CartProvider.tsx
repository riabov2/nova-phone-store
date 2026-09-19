"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { CART_KEY, type CartItem } from "@/lib/cart";

interface CartContextValue {
  items: CartItem[];
  ready: boolean;
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "id">) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) setItems(parsed.filter((item): item is CartItem => Boolean(item && typeof item === "object" && "id" in item)));
      }
    } catch {
      localStorage.removeItem(CART_KEY);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback((next: Omit<CartItem, "id">) => {
    const id = `${next.productSlug}-${next.color}-${next.storage}`;
    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      return existing
        ? current.map((item) => item.id === id ? { ...item, quantity: Math.min(9, item.quantity + next.quantity) } : item)
        : [...current, { ...next, id }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, Math.min(9, quantity)) } : item));
  }, []);
  const removeItem = useCallback((id: string) => setItems((current) => current.filter((item) => item.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => ({
    items, ready, addItem, updateQuantity, removeItem, clear,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
  }), [items, ready, addItem, updateQuantity, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
