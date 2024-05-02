import { useEffect, useState } from "react";
import { Chiller, Circuit, PowerConsumption } from "@prisma/client";
import getChiller from "../actions/getChiller";

interface ChillerData {
  chiller: Chiller | null;
  chillerPowerConsumption: PowerConsumption[];
  chillerCircuits: Circuit[];
}

export const useGetChillers = (id: string) => {
  const [chillerData, setChillerData] = useState<ChillerData>({
    chiller: null,
    chillerPowerConsumption: [],
    chillerCircuits: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { chiller, chillerCircuits, chillerPowerConsumption } =
          await getChiller(id);
        setChillerData({ chiller, chillerCircuits, chillerPowerConsumption });
      } catch (error) {
        console.error("Error fetching chiller data:", error);
      }
    };

    fetchData();
  }, [id]);

  return chillerData;
};
