import { PowerConsumption } from "@prisma/client";
import ProtocolBoardContainer from "../ProtocolBoardContainer/ProtocolBoardContainer";
import ProtocolBoardField from "../ProtocolBoardField/ProtocolBoardField";
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
          className={`flex w-full flex-col gap-3 border-grayPrint print:text-[13px] ${index < data.length - 1 && "border-b pb-4"}  ${index === 0 && "border-t-2 pt-4"}`}
          key={index}
        >
          <p className="text-[18px] font-semibold print:text-[15px]">{`Typ urządzenia – ${power.deviceType}`}</p>
          <ProtocolBoardInfoContainer>
            <ul className="flex w-full flex-col justify-between md:flex-row print:flex-row">
              <ProtocolBoardField
                label="L1"
                value={power.amperage_1}
                unit="A"
              />
              <ProtocolBoardField
                label="L2"
                value={power.amperage_2}
                unit="A"
              />
              <ProtocolBoardField
                label="L3"
                value={power.amperage_3}
                unit="A"
              />
              <ProtocolBoardField
                label="Różnica międzyfazowa"
                value={
                  power.interphaseOk === "Poprawny"
                    ? "OK"
                    : power.interphase + " %"
                }
              />
            </ul>
          </ProtocolBoardInfoContainer>
        </div>
      ))}
    </ProtocolBoardContainer>
  );
}
