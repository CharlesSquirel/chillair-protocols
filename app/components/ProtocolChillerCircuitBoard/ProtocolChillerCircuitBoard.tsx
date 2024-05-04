import { Circuit } from "@prisma/client";

interface CircuitBoardProps {
  data: Circuit[];
}

export default function ProtocolChillerCircuitBoard({
  data,
}: CircuitBoardProps) {
  return (
    <section className="flex w-full flex-col gap-4 rounded-md border bg-grayTable px-6 py-4">
      <h3 className="text-[20px] font-semibold">Parametry obiegów</h3>
      {data.map((circuit, index) => (
        <div
          className={`flex w-full flex-col gap-3 border-grayPrint ${index < data.length - 1 && "border-b pb-4"}  ${index === 0 && "border-t-2 pt-4"}`}
          key={index}
        >
          <p className="text-[18px] font-semibold">{`Obieg ${index + 1}`}</p>
          <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-0 print:flex-row print:gap-0">
            <ul>
              <span className="font-semibold">Parametry tłoczenia</span>
              <li>
                Ciśnienie tłoczenia –
                <span className="font-semibold">{` ${circuit.dischargePressure} bar`}</span>
              </li>
              <li>
                Temperatura skraplania –
                <span className="font-semibold">{` ${circuit.condensationTemperature} °C`}</span>
              </li>
              <li>
                Dochłodzenie –
                <span className="font-semibold">{` ${circuit.subcooling} °C`}</span>
              </li>
              <li>
                Temperatura wylotowa powietrza –
                <span className="font-semibold">{` ${circuit.airTemperature} °C`}</span>
              </li>
            </ul>
            <ul>
              <span className="font-semibold">Parametry ssania</span>
              <li>
                Ciśnienie ssania –
                <span className="font-semibold">{` ${circuit.suctionPressure} bar`}</span>
              </li>
              <li>
                Temperatura ssania –
                <span className="font-semibold">{` ${circuit.suctionTemperature} °C`}</span>
              </li>
              <li>
                Przegrzanie –
                <span className="font-semibold">{` ${circuit.overHeat} °C`}</span>
              </li>
            </ul>
            <ul>
              <span className="font-semibold">Parametry parownika</span>
              <li>
                Ciśnienie wody wejścia –
                <span className="font-semibold">{` ${circuit.inWaterPressure} bar`}</span>
              </li>
              <li>
                Ciśnienie wody wyjścia –
                <span className="font-semibold">{` ${circuit.outWaterPressure} bar`}</span>
              </li>
              <li>
                Temperatura wejściowa –
                <span className="font-semibold">{` ${circuit.inTemperature} °C`}</span>
              </li>
              <li>
                Temperatura wyjściowa –
                <span className="font-semibold">{` ${circuit.outTemperature} °C`}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
