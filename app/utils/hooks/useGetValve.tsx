import { useEffect, useState } from "react";
import { Valve, ValvesInfoBlock } from "@prisma/client";
import getValve from "../actions/getValve";

interface ValveData {
  valve: Valve | null;
  valveBlocks: ValvesInfoBlock[];
}

export const useGetValve = (id: string) => {
  const [valveData, setValveData] = useState<ValveData>({
    valve: null,
    valveBlocks: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { valve, valveBlocks } = await getValve(id);
        setValveData({ valve, valveBlocks });
      } catch (error) {
        console.error("Error fetching valve data:", error);
      }
    };

    fetchData();
  }, [id]);

  return valveData;
};
