"use client";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/themes/main";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Header />
    <main>{children}</main>
    <Footer />
  </ThemeProvider>
);

export default MainLayout;
