import type { Metadata } from "next";
import ProductConfigurator from "@/components/ProductConfigurator";

export const metadata: Metadata = { title: "Buy iPhone 17", description: "Configure iPhone 17: finish, storage and delivery." };
export default function ProductPage() { return <ProductConfigurator/>; }
