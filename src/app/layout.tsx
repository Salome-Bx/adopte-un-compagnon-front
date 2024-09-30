import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adopte un Compagnon",
  description: "Adopte un Compagnon, le site pour adopter un animal de refuge !",
  keywords: "adopter animal refuge association aide France chat chien adoption"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
      <ToastContainer/>
      {children}

      </body>
    </html>
  );
}
