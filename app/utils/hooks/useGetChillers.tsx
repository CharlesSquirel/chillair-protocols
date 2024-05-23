import { useEffect, useState } from "react";
import getChiller from "../actions/getChiller";
import {
  initialChillerCircuitEdit,
  initialChillerDataEdit,
  initialChillerPowerEdit,
} from "../types/chiller";

// interface ChillerData {
//   chiller: Chiller | null;
//   chillerPowerConsumption: PowerConsumption[];
//   chillerCircuits: Circuit[];
// }

export const useGetChillers = (id: string) => {
  const [chillerData, setChillerData] = useState<any>({
    chiller: initialChillerDataEdit,
    chillerPowerConsumption: initialChillerPowerEdit,
    chillerCircuits: initialChillerCircuitEdit,
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
