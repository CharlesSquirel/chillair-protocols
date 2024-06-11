import SearchContainer from "@/components/Containers/SearchContainer/SearchContainer";
import SearchContextProvider from "@/components/Providers/SearchContext";
import { firmaHeaders } from "@/data/tableHeaders";
import { getAllFirma } from "@/utils/services/firma.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Firmas() {
  const firma = await getAllFirma();

  return (
    <SearchContextProvider>
      <SearchContainer
        tableName={TableNames.FIRMA}
        headers={firmaHeaders}
        data={firma}
      />
    </SearchContextProvider>
  );
}
