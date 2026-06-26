import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Contabil Pro | Escritório Contábil em Dourados MS",
  description:
    "Escritório de contabilidade em Dourados, MS. Especialistas em abertura de empresa, contabilidade mensal, imposto de renda, folha de pagamento e planejamento tributário. Atendemos MEI, autônomos e PMEs.",
  keywords:
    "contabilidade Dourados, escritório contábil Dourados MS, abertura de empresa Dourados, imposto de renda Dourados, Contabil Pro",
  openGraph: {
    title: "Contabil Pro | Escritório Contábil em Dourados MS",
    description:
      "Simplificamos a contabilidade para que você foque no que importa: crescer o seu negócio.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
