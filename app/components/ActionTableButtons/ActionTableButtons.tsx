"use client";

import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import Link from "next/link";

interface ActionButtonProps {
  id?: string;
}

export default function ActionTableButtons({ id }: ActionButtonProps) {
  return (
    <td className="absolute right-3 top-3 z-10 flex gap-2 bg-white p-0 min-[1390px]:right-8">
      <Link href={`/dashboard/valves/${id}`}>
        <ArrowRightIcon />
      </Link>
    </td>
  );
}
