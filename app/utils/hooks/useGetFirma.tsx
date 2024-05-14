import { useEffect, useState } from "react";
import getFirmaById from "../actions/getFirmaById";
import { FirmaDTO } from "../types/firma";

export const useGetFirma = (id: string) => {
  const [firmaData, setFirmaData] = useState<FirmaDTO>({
    fullName: "",
    shortName: "",
    street: "",
    houseNumber: 0,
    localNumber: undefined,
    postCode: "",
    city: "",
    tel: undefined,
    contactEmail: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firmaData = await getFirmaById(id);
        if (!firmaData) {
          throw Error("Nie znaleziono firmy o podanym id");
        }

        setFirmaData({
          fullName: firmaData.fullName,
          shortName: firmaData.shortName,
          street: firmaData.street,
          houseNumber: firmaData.houseNumber,
          localNumber: firmaData.localNumber || undefined,
          postCode: firmaData.postCode,
          city: firmaData.city,
          tel: firmaData.tel || undefined,
          contactEmail: firmaData.contactEmail || undefined,
        });
      } catch (error) {
        console.error("Error fetching firma data:", error);
      }
    };

    fetchData();
  }, [id]);

  return firmaData;
};
