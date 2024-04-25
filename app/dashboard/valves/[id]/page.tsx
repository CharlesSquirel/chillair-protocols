import ProtocolBackButton from "@/components/ProtocolBackButton/ProtocolBackButton";
import ProtocolBasicInfo from "@/components/ProtocolBasicInfo/ProtocolBasicInfo";
import ProtocolDeleteButton from "@/components/ProtocolDeleteButton/ProtocolDeleteButton";
import ProtocolDownloadButton from "@/components/ProtocolDownloadButton/ProtocolDownloadButton";
import ProtocolEditButton from "@/components/ProtocolEditButton/ProtocolEditButton";
import ProtocolField from "@/components/ProtocolField/ProtocolField";
import ProtocolHeader from "@/components/ProtocolHeader/ProtocolHeader";
import ProtocolTable from "@/components/ProtocolTable/ProtocolTable";
import ProtocolUserSign from "@/components/ProtocolUserSign/ProtocolUserSign";
import getValve from "@/utils/actions/getValve";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { inter } from "lib/font";

interface ValveProtocolProps {
  params: {
    id: string;
  };
}

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
}: ValveProtocolProps) {
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
      <div className="flex w-full flex-col justify-between gap-4 md:flex-row print:flex-row">
        <ProtocolField title="Obiekt" value={valve.firma} />
        <ProtocolField title="Typ urządzenia" value={valve.type} />
        <ProtocolField title="Numer seryjny" value={valve.serialNumber} />
      </div>

      <ProtocolTable
        title="Zawory"
        headers={valveHeaders}
        infoBlock={valveBlocks}
      />
      <ProtocolUserSign text="podpis technika" />
      <ProtocolDownloadButton />
    </article>
  );
}
