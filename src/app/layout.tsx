import MainLayout from "@/components/layouts/MainLayout";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          <main>{children}</main>
        </MainLayout>
      </body>
    </html>
  );
}
