"use client";

import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

interface ProtocolBackButtonProps {
  isInProtocol?: boolean;
}

export default function ProtocolBackButton({
  isInProtocol = false,
}: ProtocolBackButtonProps) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={`${isInProtocol ? "flex items-center gap-2 uppercase hover:text-primary" : ""}`}
    >
      <BackIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
      {isInProtocol && "Powróć"}
    </button>
  );
}
