import Image from "next/image";
import logoImg from "@/assets/images/chillair-print.png";
import ProtocolTitle from "../ProtocolTitle/ProtocolTitle";

interface ProtocolHeaderProps {
  title: string;
}

export default function ProtocolHeader({ title }: ProtocolHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <Image src={logoImg} alt="Chillair logo" />
      <ProtocolTitle title={title} />
    </header>
  );
}
