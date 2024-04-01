import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
        className={`${poppins.className} w-screen h-screen flex flex-colr items-center justify-center bg-gray`}
      >
        {children}
      </body>
    </html>
  );
}
