import Header from "../components/Header/Header";
import SideMenu from "../components/SideMenu/SideMenu";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideMenu />
      <Header />
      {children}
    </>
  );
}
