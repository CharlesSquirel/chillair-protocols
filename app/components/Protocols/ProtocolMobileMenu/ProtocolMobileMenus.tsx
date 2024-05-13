import { SetStateAction } from "react";
import MobileMenuContainer from "../../Containers/MobileMenuContainer/MobileMenuContainer";
import ProtocolBackButton from "../ProtocolBackButton/ProtocolBackButton";
import ProtocolDeleteButton from "../ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolEditButton from "../ProtocolEditButton/ProtocolEditButton";

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
