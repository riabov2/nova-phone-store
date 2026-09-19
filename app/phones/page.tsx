import type { Metadata } from "next";
import Catalog from "@/components/Catalog";

export const metadata: Metadata = { title: "Premium phones", description: "Browse NOVA's official multi-brand flagship smartphone catalog." };
export default function PhonesPage() { return <Catalog />; }
