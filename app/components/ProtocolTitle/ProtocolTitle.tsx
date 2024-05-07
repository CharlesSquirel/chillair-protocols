"use client";

import { getProtocolTitleFromPath } from "@/utils/switch/getProtocolTitleFromPath";
import { usePathname } from "next/navigation";

interface ProtocolTitleProps {
  title?: string;
}

export default function ProtocolTitle({ title }: ProtocolTitleProps) {
  const pathname = usePathname();
  const titleFromPath = getProtocolTitleFromPath(pathname);
  return (
    <div
      className={`flex flex-col gap-1 lg:text-left print:text-left ${!title ? "text-left lg:pl-[195px]" : "text-center"}  `}
    >
      <h1 className="text-[36px] font-semibold leading-none tracking-wide text-primary lg:text-[50px] print:text-[25px]">
        {!title ? "Protokoły" : "Protokół"}
      </h1>
      <h2 className="text-[18px] font-normal uppercase lg:text-[20px] print:text-[12px] print:font-semibold">
        {title ? title : titleFromPath}
      </h2>
    </div>
  );
}
