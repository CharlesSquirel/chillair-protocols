"use client";

import { downloadPDFFromPage } from "@/utils/fetch/downloadPDFFromPage";
import { usePathname } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const DOWNLOAD_PENDING_MESSAGE = "Pobieranie...";
const DOWNLOAD_SUCCESS_MESSAGE = "Pomyślnie pobrano protokół";
const DOWNLOAD_ERROR_MESSAGE = "Wystąpił błąd podczas pobierania";

export default function ProtocolDownloadButton() {
  const [pending, setPending] = useState(false);
  const pathname = usePathname();

  const handleDownload = async () => {
    try {
      setPending(true);
      await downloadPDFFromPage(pathname);
      toast.success(DOWNLOAD_SUCCESS_MESSAGE);
    } catch (error) {
      console.log(error);
      toast.error(DOWNLOAD_ERROR_MESSAGE);
    } finally {
      setPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="btn btn-wide self-end rounded-md bg-primary text-lg text-white hover:border hover:border-primary hover:bg-white hover:text-primary print:hidden"
      disabled={pending}
    >
      {pending ? DOWNLOAD_PENDING_MESSAGE : "Pobierz"}
    </button>
  );
}
