import ProtocolBackButton from "@/components/Protocols/ProtocolBackButton/ProtocolBackButton";
import ProtocolBasicInfo from "@/components/Protocols/ProtocolBasicInfo/ProtocolBasicInfo";
import ProtocolBoardField from "@/components/Protocols/ProtocolBoardField/ProtocolBoardField";
import ProtocolBoardStaticContainer from "@/components/Protocols/ProtocolBoardStaticContainer/ProtocolBoardStaticContainer";
import ProtocolChillerCircuitBoard from "@/components/Protocols/ProtocolChillerCircuitBoard/ProtocolChillerCircuitBoard";
import ProtocolChillerPowerBoard from "@/components/Protocols/ProtocolChillerPowerBoard/ProtocolChillerPowerBoard";
import ProtocolDeleteButton from "@/components/Protocols/ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolDownloadButton from "@/components/Protocols/ProtocolDownloadButton/ProtocolDownloadButton";
import ProtocolEditButton from "@/components/Protocols/ProtocolEditButton/ProtocolEditButton";
import ProtocolField from "@/components/Protocols/ProtocolField/ProtocolField";
import ProtocolHeader from "@/components/Protocols/ProtocolHeader/ProtocolHeader";
import ProtocolUserSign from "@/components/Protocols/ProtocolUserSign/ProtocolUserSign";
import { PROTOCOL_INFO } from "@/data/chillairInfo";
import getChiller from "@/utils/actions/getChiller";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { inter } from "lib/font";

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
      className={`${inter.className} absolute top-0 z-20 flex h-screen w-full flex-col gap-[25px] bg-white px-[27px] py-[25px] print:gap-[15px] print:py-[10px]`}
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

      <p className="hidden text-center text-[8px] print:block ">
        {PROTOCOL_INFO}
      </p>

      <div className="flex justify-between ">
        <ProtocolBasicInfo
          userFirstName={chiller.firstName}
          userLastName={chiller.lastName}
          userSignature={chiller.userSignature}
          createdAt={formatDateToString(chiller.createdAt)}
        />
        <ProtocolField title="Obiekt" value={chiller.firma} />
      </div>

      <div className="flex gap-6 lg:justify-between print:justify-between">
        <ProtocolField title="Typ urządzenia" value={chiller.type} />
        <ProtocolField title="Numer seryjny" value={chiller.serialNumber} />
      </div>

      <ProtocolBoardStaticContainer title="Dane podstawowe">
        <ul className="flex w-full flex-col gap-2">
          <ProtocolBoardField
            label="Typ sterownika"
            value={chiller.driverType}
          />
          <ProtocolBoardField
            label="Różnica międzyfazowa"
            value={
              chiller.interphaseOK === "Poprawny"
                ? chiller.interphaseOK
                : chiller.interphase
            }
            unit={chiller.interphaseOK === "Poprawny" ? "" : "%"}
          />
          <ProtocolBoardField
            label="Temperatura powietrza zewnętrznego"
            value={chiller.airTemperature}
            unit="°C"
          />
          <ProtocolBoardField
            label="Ilość obiegów chłodniczych"
            value={chiller.refrigerationCircuits.join(", ")}
          />
          <ProtocolBoardField
            label="Czynnik chłodzący"
            value={chiller.refrigerant}
          />
          <ProtocolBoardField
            label="Temperatura nastawy"
            value={chiller.settingsTemperature.join(", ")}
            unit="°C"
          />
          <ProtocolBoardField
            label="Parametr kontrolowany"
            value={chiller.controlledParameter}
          />
          <ProtocolBoardField
            label="Napięcie zasilające"
            value={chiller.supplyVoltage}
            secondaryValue={chiller.supplyPhase}
            secondaryLabel="faz"
            unit="V"
          />
          <ProtocolBoardField label="Freon" value={chiller.freonType} />
          <ProtocolBoardField
            label="Ilość czynnika"
            value={chiller.freonAmount}
          />
          <ProtocolBoardField
            label="Wyłącznik wysokiego ciśnienia"
            value={chiller.highPressure}
          />
          <ProtocolBoardField
            label="Wyłącznik niskiego ciśnienia"
            value={chiller.lowPressure}
          />
          <ProtocolBoardField
            label="Termostat przeciwzamrożeniowy"
            value={chiller.antiFrezzeTermostat}
          />
          <ProtocolBoardField
            label="Zmieżone napięcie L1-L2"
            value={chiller.measuredVoltage_1}
            unit="A"
          />
          <ProtocolBoardField
            label="Zmieżone napięcie L1-L3"
            value={chiller.measuredVoltage_2}
            unit="A"
          />
          <ProtocolBoardField
            label="Zmieżone napięcie L2-L3"
            value={chiller.measuredVoltage_3}
            unit="A"
          />
        </ul>
      </ProtocolBoardStaticContainer>

      <ProtocolBoardStaticContainer title="Kontrola jakości">
        <ul className="flex w-full flex-col gap-2">
          <ProtocolBoardField
            label="Stopień zanieczyszczenia powierzchni wymiany ciepła"
            value={chiller.pollution}
          />
          <ProtocolBoardField
            label="Stan techniczny izolacji termicznej"
            value={chiller.termalInsulation}
          />
          <ProtocolBoardField
            label="Kontrola podpór, drgań i przemieszczeń powodowanych temperaturą i ciśnieniem"
            value={chiller.termalAndPressureControl}
          />
          <ProtocolBoardField
            label="Poziom oleju w sprężarkach"
            value={chiller.oilLevel}
          />
          <ProtocolBoardField
            label="Kolor wskaźnika wilgotności"
            value={chiller.indicatorColor}
          />
          <ProtocolBoardField
            label="Pobór prądu przez sprężarki"
            value={chiller.currentConsumption}
          />
          <ProtocolBoardField
            label="Pobór prądu przez wentylatory"
            value={chiller.fansConsumption}
          />
          <ProtocolBoardField
            label="Układ chłodniczy szczelny"
            value={chiller.tightSystem}
          />
        </ul>
      </ProtocolBoardStaticContainer>

      <ProtocolBoardStaticContainer title="Kontrola szczelności">
        <ul className="flex w-full flex-col 2xl:flex-row 2xl:gap-5 print:flex-col">
          <ProtocolBoardField
            label="Metoda kontroli szczelności"
            value={
              chiller.controlMethod === "Bezpośrednio"
                ? chiller.controlMethod +
                  " – czujnik podwęchowy z dokładnością 3g/rok"
                : chiller.controlMethod
            }
          />
          <ProtocolBoardField
            label="Próba szczelności za pomocą gazu obojętnego"
            value={chiller.leakGasTest}
          />
          <ProtocolBoardField
            label="Dodano gazu"
            value={chiller.gasAdded}
            unit="kg"
          />
          <ProtocolBoardField
            label="Odzyskano gazu"
            value={chiller.gasRegain}
            unit="kg"
          />
        </ul>
      </ProtocolBoardStaticContainer>

      <ProtocolChillerCircuitBoard data={chillerCircuits} />

      <ProtocolChillerPowerBoard data={chillerPowerConsumption} />

      <ProtocolUserSign text="podpis technika" />

      <ProtocolDownloadButton />
    </article>
  );
}
