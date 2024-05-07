import { PowerConsumption } from "@prisma/client";
import ProtocolBoardContainer from "../ProtocolBoardContainer/ProtocolBoardContainer";
import ProtocolBoardInfoContainer from "../ProtocolBoardInfoContainer/ProtocolBoardInfoContainer";

interface ProtocolChillerPowerBoardProps {
  data: PowerConsumption[];
}

export default function ProtocolChillerPowerBoard({
  data,
}: ProtocolChillerPowerBoardProps) {
  return (
    <ProtocolBoardContainer title="Parametry poboru prądu">
      {data.map((power, index) => (
        <div
          className={`flex w-full flex-col gap-3 border-grayPrint ${index < data.length - 1 && "border-b pb-4"}  ${index === 0 && "border-t-2 pt-4"}`}
          key={index}
        >
          <p className="text-[18px] font-semibold">{`Typ urządzenia – ${power.deviceType}`}</p>
          <ProtocolBoardInfoContainer>
            <ul className="flex w-full flex-col justify-between md:flex-row print:flex-row">
              <li>
                L1 –
                <span className="font-semibold">{` ${power.amperage_1} V`}</span>
              </li>
              <li>
                L2 –
                <span className="font-semibold">{` ${power.amperage_2} V`}</span>
              </li>
              <li>
                L3 –
                <span className="font-semibold">{` ${power.amperage_3} V`}</span>
              </li>
              <li>
                Różnica międzyfazowa –
                <span className="font-semibold">{` ${power.interphaseOk === "Poprawny" ? "OK" : power.interphase + " %"}`}</span>
              </li>
            </ul>
          </ProtocolBoardInfoContainer>
        </div>
      ))}
    </ProtocolBoardContainer>
  );
}
