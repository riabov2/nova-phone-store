import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  metadataBase: new URL("https://nova.example"),
  title: { default: "iPhone 17 Pro Max | NOVA", template: "%s | NOVA" },
  description: "Discover and configure Apple iPhone 17 Pro Max at NOVA.",
  openGraph: { title: "iPhone 17 Pro Max | NOVA", description: "Pro power. Max canvas.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><CartProvider><a className="skip-link" href="#content">Skip to content</a><Header/><main id="content">{children}</main><Footer/><CartDrawer/></CartProvider></body></html>;
}
