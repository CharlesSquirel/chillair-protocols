import { Circuit } from "@prisma/client";
import ProtocolBoardContainer from "../ProtocolBoardContainer/ProtocolBoardContainer";
import ProtocolBoardInfoContainer from "../ProtocolBoardInfoContainer/ProtocolBoardInfoContainer";

import ProtocolBoardField from "../ProtocolBoardField/ProtocolBoardField";

interface CircuitBoardProps {
  data: Circuit[];
}

export default function ProtocolChillerCircuitBoard({
  data,
}: CircuitBoardProps) {
  return (
    <ProtocolBoardContainer title="Parametry obiegów">
      {data.map((circuit, index) => (
        <div
          className={`flex w-full flex-col gap-3 border-grayPrint print:text-[13px] ${index < data.length - 1 && "border-b pb-4"}  ${index === 0 && "border-t-2 pt-4"}`}
          key={index}
        >
          <p className="text-[18px] font-semibold print:text-[15px]">{`Obieg ${index + 1}`}</p>
          <ProtocolBoardInfoContainer>
            <ul className="print:text-[13px]">
              <span className="font-semibold">Parametry tłoczenia</span>
              <ProtocolBoardField
                label="Ciśnienie tłoczenia"
                value={circuit.dischargePressure}
                unit="bar"
              />
              <ProtocolBoardField
                label="Temperatura skraplania"
                value={circuit.condensationTemperature}
                unit="°C"
              />
              <ProtocolBoardField
                label="Dochłodzenie"
                value={circuit.subcooling}
                unit="°C"
              />
              <ProtocolBoardField
                label="Temperatura wylotowa powietrza"
                value={circuit.airTemperature}
                unit="°C"
              />
            </ul>
            <ul>
              <span className="font-semibold">Parametry ssania</span>
              <ProtocolBoardField
                label="Ciśnienie ssania"
                value={circuit.suctionPressure}
                unit="bar"
              />
              <ProtocolBoardField
                label="Temperatura ssania"
                value={circuit.suctionTemperature}
                unit="°C"
              />
              <ProtocolBoardField
                label="Przegrzanie"
                value={circuit.overHeat}
                unit="°C"
              />
            </ul>
            <ul>
              <span className="font-semibold">Parametry parownika</span>
              <ProtocolBoardField
                label="Ciśnienie wody wejścia"
                value={circuit.inWaterPressure}
                unit="bar"
              />
              <ProtocolBoardField
                label="Ciśnienie wody wyjścia"
                value={circuit.outWaterPressure}
                unit="bar"
              />
              <ProtocolBoardField
                label="Temperatura wejściowa"
                value={circuit.inTemperature}
                unit="°C"
              />
              <ProtocolBoardField
                label="Temperatura wyjściowa"
                value={circuit.outTemperature}
                unit="°C"
              />
            </ul>
          </ProtocolBoardInfoContainer>
        </div>
      ))}
    </ProtocolBoardContainer>
  );
}
