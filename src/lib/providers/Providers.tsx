"use client";

import React from "react";
import ThemeWrapperProvider from "./ThemeWrapperProvider";
import ReduxWrapperProvider from "./ReduxWrapperProvider";
import Header from "../../components/Header";
import StyledComponentsRegistry from "./StyledComponentsRegistry";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeWrapperProvider>
        <ReduxWrapperProvider>
          <Header />
          {children}
        </ReduxWrapperProvider>
      </ThemeWrapperProvider>
    </StyledComponentsRegistry>
  );
}
