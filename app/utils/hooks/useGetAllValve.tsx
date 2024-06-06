import { useEffect, useState } from "react";
import { getAllValves } from "../services/valve.services";

export const useGetAllValves = () => {
  const [valves, setValves] = useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const valves = await getAllValves();
        setValves(valves);
      } catch (error) {
        console.error("Error fetching valve data:", error);
      }
    };

    fetchData();
  }, []);
  return valves;
};
