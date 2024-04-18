import Image from "next/image";
import logoImg from "../../assets/images/chillair-print.png";

interface ProtocolHeaderProps {
  title: string;
}

export default function ProtocolHeader({ title }: ProtocolHeaderProps) {
  return (
    <header className="flex justify-between">
      <Image src={logoImg} alt="Chillair logo" />
      <div className="flex flex-col">
        <h1 className="text-[36px] text-primary ">Protokół</h1>
        <h2 className="text-blackPrint text-[18px] uppercase">{title}</h2>
      </div>
    </header>
  );
}
