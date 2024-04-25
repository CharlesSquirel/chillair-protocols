import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { inter } from "lib/font";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chillair Protocols",
  description: "Chillair Protocols",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" data-theme="corporate">
      <body
        className={`${poppins.className} ${inter.className} flex h-screen w-screen flex-col items-center justify-center bg-gray`}
      >
        {children}
      </body>
    </html>
  );
}
