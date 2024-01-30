import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { ReactQueryProvider } from "@/providers/react-query";
import { ToasterProvider } from "@/providers/sonner";
;
import { Inter } from "next/font/google";
import LogInWithEmailModal from "@/modals/logInWithEmail";
import LoginProvidersModal from "@/modals/loginProviderModal";
import SignUpWithEMailModal from "@/modals/signUpWithEmail";
import CreateAccountModal from "@/modals/createAccountModal";
import { CookiesProvider } from 'next-client-cookies/server';



const inter = Inter({ subsets: ["latin"] });

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
<CookiesProvider><ReactQueryProvider>        
  <ToasterProvider>
<LogInWithEmailModal/>
<LoginProvidersModal/>
<SignUpWithEMailModal/>
<CreateAccountModal/>

        {children}
        </ToasterProvider>      
</ReactQueryProvider>
</CookiesProvider>

        </body>

    </html>
  );
}
