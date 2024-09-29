"use client";
import Footer from "@/components/ui/Footer";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/themes/main";
import Header from "@/components/ui/Header";

import { AppProvider } from "@/context/AppContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppProvider>
      <Header />
      {children}
      <Footer />
    </AppProvider>
  </ThemeProvider>
);

export default MainLayout;
