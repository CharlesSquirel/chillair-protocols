import ProtocolBackButton from "@/components/Protocols/ProtocolBackButton/ProtocolBackButton";
import ProtocolBasicInfo from "@/components/Protocols/ProtocolBasicInfo/ProtocolBasicInfo";
import ProtocolDeleteButton from "@/components/Protocols/ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolDownloadButton from "@/components/Protocols/ProtocolDownloadButton/ProtocolDownloadButton";
import ProtocolEditButton from "@/components/Protocols/ProtocolEditButton/ProtocolEditButton";
import ProtocolField from "@/components/Protocols/ProtocolField/ProtocolField";
import ProtocolFieldContainer from "@/components/Protocols/ProtocolFieldContainer/ProtocolFieldContainer";
import ProtocolHeader from "@/components/Protocols/ProtocolHeader/ProtocolHeader";
import ProtocolUserSign from "@/components/Protocols/ProtocolUserSign/ProtocolUserSign";
import ProtocolValveBoard from "@/components/Protocols/ProtocolValveBoard/ProtocolValveBoard";
import { metaTitle } from "@/data/metaTitles";
import getValve from "@/utils/actions/getValve";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { FormEditPropsAsParams } from "@/utils/types/common";
import { inter } from "lib/font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTitle.PROTOCOL_VIEW,
};

enum ValveHeader {
  LP = "Lp",
  VALVE_LOCATION = "Miejsce instalowania zaworu",
  TYPE = "Typ",
  SERIAL_NUMBER = "Nr fabryczny",
  PRESSURE_SETTING = "Nastawa (Bar)",
  PRESSURE_OPEN = "Otwarcie (Bar)",
  PRESSURE_CLOSE = "Zamknięcie (Bar)",
}

const valveHeaders: ValveHeader[] = [
  ValveHeader.LP,
  ValveHeader.VALVE_LOCATION,
  ValveHeader.TYPE,
  ValveHeader.SERIAL_NUMBER,
  ValveHeader.PRESSURE_SETTING,
  ValveHeader.PRESSURE_OPEN,
  ValveHeader.PRESSURE_CLOSE,
];

// const getValve = cache(async (id: string) => {
//   const valve = await prisma.valve.findUnique({
//     where: {
//       id,
//     },
//   });

//   return valve;
// });

// const getValveInfoBlocks = cache(async (id: string) => {
//   const valveBlocks: ValvesInfoBlock[] = await prisma.valvesInfoBlock.findMany({
//     where: {
//       valveId: id,
//     },
//   });
//   return valveBlocks;
// });

export default async function ValveProtocol({
  params: { id },
}: FormEditPropsAsParams) {
  const { valve, valveBlocks } = await getValve(id);
  if (!valve || !valveBlocks) {
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

      <ProtocolHeader title="badania zaworów bezpieczeństwa" id={id} />

      <ProtocolBasicInfo
        userFirstName={valve.firstName}
        userLastName={valve.lastName}
        userSignature={valve.userSignature}
        createdAt={formatDateToString(valve.createdAt)}
      />

      <ProtocolFieldContainer>
        <ProtocolField title="Obiekt" value={valve.firma} />
        <ProtocolField title="Typ urządzenia" value={valve.type} />
        <ProtocolField title="Numer seryjny" value={valve.serialNumber} />
      </ProtocolFieldContainer>

      <ProtocolValveBoard data={valveBlocks} />

      <ProtocolUserSign text="podpis technika" />

      <ProtocolDownloadButton />
    </article>
  );
}
