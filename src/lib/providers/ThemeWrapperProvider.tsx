"use client";

import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${openSans.style.fontFamily};
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const theme = {};

export default function ThemeWrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
