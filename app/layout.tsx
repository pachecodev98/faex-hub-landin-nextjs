import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fonte_sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fonte_mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "faexHUB - Conecte-se. Compartilhe. Aprenda.",
  description: "Plataforma de conexão, compartilhamento e aprendizado para comunidades",
};

export default function layout_raiz({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-BR" className={`${fonte_sans.variable} ${fonte_mono.variable}`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
