import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header/>
        <main className="container mx-auto p-4 pr-0 pl-0">{children}</main>

      
      </body>
    </html>
  );
}
