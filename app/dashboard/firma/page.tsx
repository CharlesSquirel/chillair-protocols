import ActionTableButtons from "@/components/Buttons/ActionTableButtons/ActionTableButtons";
import TableContainer from "@/components/Containers/TableContainer/TableContainer";
import { firmaHeaders } from "@/data/tableHeaders";
import { getAllFirma } from "@/utils/services/firma.services";
import { TableNames } from "@/utils/types/tableNames";

export default async function Firmas() {
  const firmaAll = await getAllFirma();

  return !firmaAll ? (
    <p>Nie ma żadnych firm</p>
  ) : (
    <TableContainer
      tableName={TableNames.FIRMA}
      headers={firmaHeaders}
      renderRows={() => (
        <>
          {firmaAll?.map((firma, index) => (
            <tr
              key={index}
              className="relative hover:cursor-pointer hover:text-primary"
            >
              <td>{firma.fullName}</td>
              <td>
                {firma.street}, {firma.houseNumber}
                {firma.localNumber ? `/${firma.localNumber}` : null}
              </td>
              <td>
                {firma.postCode} {firma.city}
              </td>
              <td>{firma.tel}</td>
              <td>{firma.contactEmail}</td>
              <ActionTableButtons id={firma.id} tableName={TableNames.FIRMA} />
            </tr>
          ))}
        </>
      )}
    ></TableContainer>
  );
}
