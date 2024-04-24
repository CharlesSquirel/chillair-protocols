"use client";

import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";
import Link from "next/link";

interface ActionButtonProps {
  id?: string;
}

export default function ActionTableButtons({ id }: ActionButtonProps) {
  return (
    <td className="z-10 gap-2 bg-white p-0 min-[915px]:absolute min-[915px]:right-3 min-[915px]:top-3  min-[1390px]:right-8 ">
      <Link href={`/dashboard/valves/${id}`}>
        <ArrowRightIcon />
      </Link>
    </td>
  );
}
