import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import SideMenu from "@/components/SideMenu/SideMenu";
import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SessionProvider>
        <SideMenu />
        <section className="flex h-screen w-full flex-col pb-8">
          <Header />
          <NavBar />
          {children}
        </section>
      </SessionProvider>
    </>
  );
}
