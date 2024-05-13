import { ValvesInfoBlock } from "@prisma/client";
import ProtocolBoardContainer from "../ProtocolBoardContainer/ProtocolBoardContainer";
import ProtocolBoardInfoContainer from "../ProtocolBoardInfoContainer/ProtocolBoardInfoContainer";

interface ProtocolValveBoardProps {
  data: ValvesInfoBlock[];
}

export default function ProtocolValveBoard({ data }: ProtocolValveBoardProps) {
  return (
    <ProtocolBoardContainer title="Zawory bezpieczeństwa">
      {data.map((block, index) => (
        <div
          className={`flex w-full flex-col gap-3 border-grayPrint ${index < data.length - 1 && "border-b pb-4"}  ${index === 0 && "border-t-2 pt-4"}`}
          key={index}
        >
          <p className="text-[18px] font-semibold">{`Zawór – ${index + 1}`}</p>
          <ProtocolBoardInfoContainer>
            <ul>
              <li>
                Miejsce instalowania zaworu –
                <span className="font-semibold">{` ${block.valveLocation}`}</span>
              </li>
              <li>
                Typ –
                <span className="font-semibold">{` ${block.valveType}`}</span>
              </li>
              <li>
                Nr fabryczny –
                <span className="font-semibold">{` ${block.valveSerialNumber}`}</span>
              </li>
              <li>
                Ciśnienie nastawy –
                <span className="font-semibold">{` ${block.pressureSetting} bar`}</span>
              </li>
              <li>
                Ciśnienie otwarcia –
                <span className="font-semibold">{` ${block.pressureOpen} bar`}</span>
              </li>
              <li>
                Ciśnienie zamknięcia –
                <span className="font-semibold">{` ${block.pressureClose} bar`}</span>
              </li>
              <li>
                Uwagi –
                <span className="font-semibold">{` ${block.description ? block.description : "brak"}`}</span>
              </li>
            </ul>
          </ProtocolBoardInfoContainer>
        </div>
      ))}
    </ProtocolBoardContainer>
  );
}
