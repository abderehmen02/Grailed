import { Header } from "@/components/layout/headers";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header/>
      {children}
    </main>
  );
}
