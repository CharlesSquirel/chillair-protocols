"use client";

import DeleteIcon from "@/assets/icons/DeleteIcon";
import { useGetDeleteHandler } from "@/utils/hooks/useGetDeleteHandler";
import toast from "react-hot-toast";

interface DeleteFirmaButtonProps {
  id: string;
}

export default function DeleteFirmaButton({ id }: DeleteFirmaButtonProps) {
  const onDelete = useGetDeleteHandler();
  const handleOnDelete = async () => {
    if (window.confirm("Czy na pewno chcesz usunąć siedzibę?")) {
      try {
        onDelete(id);
        toast.success("Pomyślnie usunięto siedzibę");
      } catch (error) {
        console.error(error);
        toast.error("Wystąpił problem!");
      }
    }
  };
  return (
    <button onClick={handleOnDelete}>
      <DeleteIcon className="size-7 hover:text-error" />
    </button>
  );
}
