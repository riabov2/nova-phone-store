import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: { default: "NOVA — iPhone 17", template: "%s — NOVA" },
  description: "Descubre y configura el iPhone 17 en NOVA España.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body><CartProvider><a className="skip-link" href="#content">Saltar al contenido</a><Header/><main id="content">{children}</main><Footer/></CartProvider></body></html>;
}
