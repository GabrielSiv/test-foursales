"use client";

import { Open_Sans } from "next/font/google";
import ReduxProvider from "../components/ReduxProvider";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${openSans.style.fontFamily};
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={{}}>
            <GlobalStyle />
            <ReduxProvider>{children}</ReduxProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
