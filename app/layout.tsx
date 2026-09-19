import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nova.example"),
  title: { default: "NOVA | Premium smartphones", template: "%s | NOVA" },
  description: "Explore premium smartphones from Apple, Samsung, vivo, HONOR, TECNO, Infinix, OPPO, Xiaomi and Redmi.",
  openGraph: { title: "NOVA | Premium smartphones", description: "A carefully sourced multi-brand flagship catalog.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><a className="skip-link" href="#content">Skip to content</a><Header/><main id="content">{children}</main><Footer/><CartDrawer/></CartProvider></body></html>;
}
