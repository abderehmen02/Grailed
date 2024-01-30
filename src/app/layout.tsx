import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { ReactQueryProvider } from "@/providers/react-query";
import { ToasterProvider } from "@/providers/sonner";

const pop = Poppins({
  weight: '400',
  subsets: ['latin'],
  display:'swap'
})
export const metadata: Metadata = {
  title: "Grailed",
  description: "Buy, sell and discover authenticated pieces from top brands, spanning designer, vintage, streetwear and more. Shop men's and women's clothing on Grailed, the platform for personal style. Explore top listings from the community today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body className={inter.className}>
<ReactQueryProvider>        
  <ToasterProvider>
        {children}
        </ToasterProvider>      
</ReactQueryProvider>
        </body>

    </html>
  );
}
