"use client";

import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

export default function ProtocolBackButton() {
  const router = useRouter();
  return (
    <button
      className="absolute right-[27px] top-[25px] print:hidden"
      type="button"
      onClick={() => router.back()}
    >
      <BackIcon />
    </button>
  );
}
