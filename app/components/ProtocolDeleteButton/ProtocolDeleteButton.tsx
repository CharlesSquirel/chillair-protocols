"use client";

import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useGetDeleteHandler } from "@/utils/hooks/useGetDeleteHandler";
import { useRouter } from "next/navigation";

interface ProtocolDeleteButtonProps {
  id: string;
  isInProtocol?: boolean;
}

export default function ProtocolDeleteButton({
  id,
  isInProtocol = false,
}: ProtocolDeleteButtonProps) {
  const router = useRouter();
  const onDelete = useGetDeleteHandler();

  const handleOnDelete = () => {
    if (window.confirm("Czy na pewno chcesz usunąć protokół?")) {
      onDelete(id);
      router.back();
    }
  };
  return (
    <button
      onClick={handleOnDelete}
      className={`${isInProtocol ? "flex items-center gap-2 uppercase hover:text-primary" : ""}`}
    >
      <DeleteIcon className="h-8 w-8 cursor-pointer hover:stroke-primary" />
      {isInProtocol && "Usuń"}
    </button>
  );
}
