import { useEffect, useState } from "react";
import getValve from "../actions/getValve";
import { initialValveEdit, initialValveInfoBlockEdit } from "../types/valves";

export const useGetValve = (id: string) => {
  const [valveData, setValveData] = useState<any>({
    valve: initialValveEdit,
    valveBlocks: initialValveInfoBlockEdit,
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
