import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { inter } from "lib/font";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="pl" data-theme="corporate">
        <body
          className={`${poppins.className} ${inter.className} flex h-screen w-screen flex-col items-center justify-center bg-gray`}
        >
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 3000,
            }}
          />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
