import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import SideMenu from "@/components/SideMenu/SideMenu";
import { auth } from "@clerk/nextjs/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  auth().protect();
  return (
    <>
      <SideMenu />
      <section className="flex h-screen w-full flex-col pb-8">
        <Header />
        <NavBar />
        {children}
      </section>
    </>
  );
}
