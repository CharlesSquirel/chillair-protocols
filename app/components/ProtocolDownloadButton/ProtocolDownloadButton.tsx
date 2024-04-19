"use client";

import { downloadPDFFromPage } from "@/utils/fetch/downloadPDFFromPage";
import { usePathname } from "next/navigation";

export default function ProtocolDownloadButton() {
  const pathname = usePathname();
  return (
    <button
      type="button"
      onClick={() => downloadPDFFromPage(pathname)}
      className="btn btn-wide self-end rounded-md bg-primary text-lg text-white hover:border hover:border-primary hover:bg-white hover:text-primary"
    >
      Pobierz
    </button>
  );
}
