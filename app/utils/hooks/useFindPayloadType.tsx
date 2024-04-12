import { usePathname } from "next/navigation";

export const useFindPayloadType = () => {
  const pathname = usePathname();
  switch (pathname) {
    case "/dashboard/valves/add":
      return { type: "ValvesCredentials" as const };

    default:
      return { type: "Unknown" as const };
  }
};
