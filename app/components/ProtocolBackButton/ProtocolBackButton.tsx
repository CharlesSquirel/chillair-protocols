"use client";

import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

export default function ProtocolBackButton() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.back()}>
      <BackIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
    </button>
  );
}
