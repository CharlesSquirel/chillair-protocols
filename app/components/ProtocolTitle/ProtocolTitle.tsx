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
    <div className="flex flex-col gap-1 lg:pl-[260px] print:pl-0">
      <h1 className="text-[36px] font-semibold leading-none tracking-wide text-primary lg:text-[50px] print:text-[36px]">
        {!title ? "Protokoły" : "Protokół"}
      </h1>
      <h2 className="text-[18px] font-normal uppercase lg:text-[20px] print:text-[18px] print:font-semibold">
        {title ? title : titleFromPath}
      </h2>
    </div>
  );
}
