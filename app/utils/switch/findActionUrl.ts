import { TableNames } from "../types/tableNames";

export const findActionUrl = (tableName: TableNames, id: string): string => {
  if (!tableName) {
    throw Error("Nie zdefiniowano tableName");
  }
  let url = "/dashboard";
  switch (tableName) {
    case TableNames.VALVES:
      url += `/valves`;
      break;
    case TableNames.FIRMA:
      url += `/firma/edit`;
      break;
    case TableNames.USERS:
      url += `/users/edit`;
      break;
    default:
      break;
  }
  return url + `/${id}`;
};
