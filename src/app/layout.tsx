import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leme Carrinhos",
  description: "Leme carrinhos, Carrinhos de mercado e serviço que não te deixam na mão",
  authors: [{ name: "Donuts Tech" }],
  keywords: ["carrinhos de mercado", "carrinhos de serviço", "durabilidade", "qualidade", "Leme Carrinhos"],
  openGraph: {
    title: "Leme Carrinhos - Carrinhos para mercado e serviços de alta qualidade",
    description: "Os melhores carrinhos de mercado e serviços que garantem durabilidade e eficiência.",
    url: "https://www.lemecarrinhos.com.br",
    siteName: "Leme Carrinhos",
    images: [
      {
        url: "https://www.lemecarrinhos.com.br/assets/imgOPG.jpg", // Substitua por uma imagem real
        width: 1200,
        height: 630,
        alt: "Leme Carrinhos - Qualidade e durabilidade",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.lemecarrinhos.com.br",
  },
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