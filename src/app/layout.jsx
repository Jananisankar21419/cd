import localFont from "next/font/local";
import "./globals.css";
import { CartProvider } from "./context/CartProvider";

const gambarino = localFont({
  src: [
    {
      path: "../../public/Gambarino-Regular.woff2",
      weight: "200 800",
    },
  ],
  display: "swap",
  variable: "--font-gambarino",
});

export const metadata = {
  title: "CakeDilim",
  description:
    "Welcome to CakeDilim - Your go-to destination for delicious cakes and treats.",
  robots: "index, follow",
  nocache: true,
  openGraph: {
    title: "CakeDilim - The Ultimate Cake Destination",
    description:
      "Discover our range of delectable cakes and enjoy a sweet experience.",
    url: "http://yourwebsite.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={gambarino.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/lo1.svg" sizes="any" />
      </head>
      <body className="font-gambarino antialiased bg-[#F5EDED]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
