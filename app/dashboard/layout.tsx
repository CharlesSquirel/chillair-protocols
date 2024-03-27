import Header from '@/components/Header/Header';
import NavBar from '@/components/NavBar/NavBar';
import SideMenu from '@/components/SideMenu/SideMenu';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideMenu />
      <section className="w-full h-screen flex flex-col">
        <Header />
        <NavBar />
        {children}
      </section>
    </>
  );
}
