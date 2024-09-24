import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leme Carrinhos",
  description: "Leme carrinhos, Carrinhos de mercado e serviço que não te deixam na mão",
  authors: [{name: "Donuts Tech"}],
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}