import ProtocolBackButton from "@/components/ProtocolBackButton/ProtocolBackButton";
import ProtocolBasicInfo from "@/components/ProtocolBasicInfo/ProtocolBasicInfo";
import ProtocolChillerCircuitBoard from "@/components/ProtocolChillerCircuitBoard/ProtocolChillerCircuitBoard";
import ProtocolDeleteButton from "@/components/ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolDownloadButton from "@/components/ProtocolDownloadButton/ProtocolDownloadButton";
import ProtocolEditButton from "@/components/ProtocolEditButton/ProtocolEditButton";
import ProtocolField from "@/components/ProtocolField/ProtocolField";
import ProtocolFieldContainer from "@/components/ProtocolFieldContainer/ProtocolFieldContainer";
import ProtocolHeader from "@/components/ProtocolHeader/ProtocolHeader";
import ProtocolTable from "@/components/ProtocolTable/ProtocolTable";
import ProtocolUserSign from "@/components/ProtocolUserSign/ProtocolUserSign";
import {
  chillerCircuitHeaders,
  chillerPowerHeaders,
} from "@/data/tableHeaders";
import getChiller from "@/utils/actions/getChiller";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { inter } from "lib/font";
import React from "react";

interface ChillerProtocolProps {
  params: {
    id: string;
  };
}

export default async function ChillerProtocol({
  params: { id },
}: ChillerProtocolProps) {
  const { chiller, chillerCircuits, chillerPowerConsumption } =
    await getChiller(id);
  if (!chiller || !chillerCircuits || !chillerPowerConsumption) {
    throw new Error("Nie znaleziono rekordu w bazie danych");
  }
  return (
    <article
      className={`${inter.className} absolute top-0 z-20 flex h-screen w-full flex-col gap-[30px] bg-white px-[27px] py-[25px]`}
    >
      <div className="absolute right-[27px] top-[35px] hidden gap-3 md:flex print:hidden">
        <ProtocolDeleteButton id={id} />
        <ProtocolEditButton id={id} />
        <ProtocolBackButton />
      </div>

      <ProtocolHeader
        title="przeglądu agregatu chłodniczego z kontrolą szczelności"
        id={id}
      />
      <ProtocolBasicInfo
        userFirstName={chiller.firstName}
        userLastName={chiller.lastName}
        userSignature={chiller.userSignature}
        createdAt={formatDateToString(chiller.createdAt)}
      />
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row print:flex-row">
        <ProtocolField title="Obiekt" value={chiller.firma} />
        <ProtocolField title="Typ urządzenia" value={chiller.type} />
        <ProtocolField title="Numer seryjny" value={chiller.serialNumber} />
      </div>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Stopień zanieczyszczenia powierzchni wymiany ciepła"
          value={chiller.pollution}
        />
        <ProtocolField
          title="Stan techniczny izolacji termicznej"
          value={chiller.termalInsulation}
        />
        <ProtocolField
          title="Kontrola podpór, drgań i przemieszczeń powodowanych temperaturą i ciśnieniem"
          value={chiller.termalAndPressureControl}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Napięcie zasilające"
          value={chiller.supplyVoltage}
          secondaryValue={chiller.supplyPhase}
          secondaryTitle="faz"
          unit="V"
        />
        <ProtocolField title="Typ sterownika" value={chiller.driverType} />
        <ProtocolField
          title="Różnica międzyfazowa"
          value={
            chiller.interphaseOK === "Poprawny"
              ? chiller.interphaseOK
              : chiller.interphase
          }
          unit={chiller.interphaseOK === "Poprawny" ? "" : "%"}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Zmierzone napięcie L1-L2"
          value={chiller.measuredVoltage_1}
          unit="V"
        />
        <ProtocolField
          title="Zmierzone napięcie L1-L"
          value={chiller.measuredVoltage_2}
          unit="V"
        />
        <ProtocolField
          title="Zmierzone napięcie L2-L3"
          value={chiller.measuredVoltage_3}
          unit="V"
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField title="Rodzaj freonu" value={chiller.freonType} />
        <ProtocolField title="Ilość czynnika" value={chiller.freonAmount} />
        <ProtocolField
          title="Temperatura powietrza zewnętrznego"
          value={chiller.airTemperature}
          unit="°C"
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Ilość obiegów chłodniczych"
          value={chiller.refrigerationCircuits.join(", ")}
        />
        <ProtocolField title="Czynnik chłodzący" value={chiller.refrigerant} />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Poziom oleju w sprężarkach"
          value={chiller.oilLevel}
        />
        <ProtocolField
          title="Kolor wskaźnika wilgotności"
          value={chiller.indicatorColor}
        />
        <ProtocolField
          title="Układ chłodniczy szczelny"
          value={chiller.tightSystem}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Pobór prądu przez sprężarki"
          value={chiller.currentConsumption}
        />
        <ProtocolField
          title="Pobór prądu przez wentylatory"
          value={chiller.fansConsumption}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Wyłącznik wysokiego ciśnienia"
          value={chiller.highPressure}
        />
        <ProtocolField
          title="Wyłącznik niskiego ciśnienia"
          value={chiller.lowPressure}
        />
        <ProtocolField
          title="Termostat przeciwzamrożeniowy"
          value={chiller.antiFrezzeTermostat}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Temperatura nastawy"
          value={chiller.settingsTemperature.join(", ")}
          unit="°C"
        />
        <ProtocolField
          title="Parametr kontrolowany"
          value={chiller.controlledParameter}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField
          title="Metoda kontroli szczelności"
          value={
            chiller.controlMethod === "Bezpośrednio"
              ? chiller.controlMethod +
                " – czujnik podwęchowy z dokładnością 3g/rok"
              : chiller.controlMethod
          }
        />
        <ProtocolField
          title="Próba szczelności za pomocą gazu obojętnego"
          value={chiller.leakGasTest}
        />
      </ProtocolFieldContainer>

      <ProtocolFieldContainer>
        <ProtocolField title="Dodano gazu" value={chiller.gasAdded} unit="kg" />
        <ProtocolField
          title="Odzyskano gazu"
          value={chiller.gasRegain}
          unit="kg"
        />
      </ProtocolFieldContainer>

      <ProtocolChillerCircuitBoard data={chillerCircuits} />

      <ProtocolTable
        headers={chillerPowerHeaders}
        title="Parametry poboru prądu"
        renderRows={() => (
          <>
            {chillerPowerConsumption.map((power, index) => (
              <React.Fragment key={index}>
                <tr
                  className={
                    index < chillerCircuits.length - 1
                      ? `border-b-[1px] border-b-black`
                      : ""
                  }
                >
                  <td>{power.deviceType}</td>
                  <td>{power.amperage_1} V</td>
                  <td>{power.amperage_2} V</td>
                  <td>{power.amperage_3} V</td>
                  <td>
                    {power.interphaseOk === "Poprawny"
                      ? "OK"
                      : power.interphase + " %"}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </>
        )}
      />

      <ProtocolUserSign text="podpis technika" />

      <ProtocolDownloadButton />
    </article>
  );
}
