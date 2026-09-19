import type { Metadata } from "next";
import ProductConfigurator from "@/components/ProductConfigurator";

export const metadata: Metadata = { title: "Comprar iPhone 17", description: "Configura tu iPhone 17: acabado, capacidad y entrega." };
export default function ProductPage() { return <ProductConfigurator/>; }
