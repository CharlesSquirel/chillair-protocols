import Image from 'next/image';
import logo from '../../../public/chillair_logo.png';

export default function SideMenu() {
  return (
    <aside className="h-screen bg-secondary fixed left-0 flex flex-col">
      <Image src={logo} alt="Chillair logo" />
      <ul className="flex flex-col">
        {Array.from({ length: 5 }, (_, index) => (
          <li key={index} className="cursor-pointer">
            Item
          </li>
        ))}
      </ul>
    </aside>
  );
}
