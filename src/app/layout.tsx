import type { Metadata } from "next";

import Providers from "../lib/providers/Providers";

export const metadata: Metadata = {
  title: "Lista de usuários",
  description: "Gerencie e visualize informações de usuários e seus favoritos.",
};

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
