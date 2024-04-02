import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
