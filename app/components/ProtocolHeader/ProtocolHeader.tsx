import Image from "next/image";
import logoImg from "@/assets/images/chillair-print.png";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";

interface ProtocolHeaderProps {
  title: string;
}

export default function ProtocolHeader({ title }: ProtocolHeaderProps) {
  return (
    <header className="mr-[170px] flex items-center justify-between print:mr-0">
      <Image src={logoImg} alt="Chillair logo" />
      <ProtocolTitle title={title} />
    </header>
  );
}
