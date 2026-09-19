import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nova.example"),
  title: { default: "iPhone 17 | NOVA Premium Technology", template: "%s | NOVA" },
  description: "Discover and configure iPhone 17 at NOVA. Premium technology, delivered across Spain.",
  openGraph: { title: "iPhone 17 | NOVA", description: "Designed to go further.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><a className="skip-link" href="#content">Skip to content</a><Header/><main id="content">{children}</main><Footer/><CartDrawer/></CartProvider></body></html>;
}
