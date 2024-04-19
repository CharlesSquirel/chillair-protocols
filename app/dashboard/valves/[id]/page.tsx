import InputRow from "@/components/InputRow/InputRow";
import ProtocolBasicInfo from "@/components/ProtocolBasicInfo/ProtocolBasicInfo";
import ProtocolDownloadButton from "@/components/ProtocolDownloadButton/ProtocolDownloadButton";
import ProtocolField from "@/components/ProtocolField/ProtocolField";
import ProtocolHeader from "@/components/ProtocolHeader/ProtocolHeader";
import ProtocolTable from "@/components/ProtocolTable/ProtocolTable";
import { formatDateToString } from "@/utils/helpers/formatDateToString";
import { ValvesInfoBlock } from "@prisma/client";
import { inter } from "app/layout";
import { prisma } from "lib/db";
import { cache } from "react";

interface ValveProtocolProps {
  params: {
    id: string;
  };
}

const valveHeaders = [
  "Lp",
  "Miejsce instalowania zaworu",
  "Typ",
  "Nr fabryczny",
  "Nastawa (MPa)",
  "Otwarcie (MPa)",
  "Zamknięcie (MPa)",
];

const getValve = cache(async (id: string) => {
  const valve = await prisma.valve.findUnique({
    where: {
      id,
    },
  });
  return valve;
});

const getValveInfoBlocks = cache(async (id: string) => {
  const valveBlock: ValvesInfoBlock[] = await prisma.valvesInfoBlock.findMany({
    where: {
      valveId: id,
    },
  });
  return valveBlock;
});

export default async function ValveProtocol({
  params: { id },
}: ValveProtocolProps) {
  const valve = await getValve(id);
  const valveInfoBlock = await getValveInfoBlocks(id);
  if (!valve || !valveInfoBlock) {
    throw new Error("Nie znaleziono rekordu w bazie danych");
  }

  return (
    <article
      className={`${inter.className} absolute top-0 z-20 flex w-full flex-col gap-[30px] bg-white px-[27px] py-[25px]`}
    >
      <ProtocolHeader title="badania zaworów bezpieczeństwa" />
      <ProtocolBasicInfo
        userFirstName={valve.firstName}
        userLastName={valve.lastName}
        userSignature={valve.userSignature}
        createdAt={formatDateToString(valve.createdAt)}
      />
      <InputRow className="w-full justify-between ">
        <ProtocolField title="Obiekt" value={valve.firma} />
        <ProtocolField title="Typ urządzenia" value={valve.type} />
        <ProtocolField title="Numer seryjny" value={valve.serialNumber} />
      </InputRow>
      <ProtocolTable
        title="Zawory"
        headers={valveHeaders}
        infoBlock={valveInfoBlock}
      />
      <ProtocolDownloadButton />
    </article>
  );
}
