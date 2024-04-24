import { SetStateAction } from "react";
import MobileMenuContainer from "../MobileMenuContainer/MobileMenuContainer";
import ProtocolDeleteButton from "../ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolEditButton from "../ProtocolEditButton/ProtocolEditButton";
import ProtocolBackButton from "../ProtocolBackButton/ProtocolBackButton";

interface ProtocolMobileMenuProps {
  onClick: React.Dispatch<SetStateAction<boolean>>;
  id: string;
}

export default function ProtocolMobileMenu({
  onClick,
  id,
}: ProtocolMobileMenuProps) {
  return (
    <MobileMenuContainer onClick={() => onClick(false)}>
      <li>
        <ProtocolDeleteButton id={id} isInProtocol />
      </li>
      <li>
        <ProtocolEditButton id={id} isInProtocol />
      </li>
      <li>
        <ProtocolBackButton isInProtocol />
      </li>
    </MobileMenuContainer>
  );
}
