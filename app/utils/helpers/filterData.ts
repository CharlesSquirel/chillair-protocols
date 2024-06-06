export function filterData(data: any[], searchPhrase: string) {
  const lowerCaseSearchPhrase = searchPhrase.toLowerCase().trim();

  // Przeprowadź filtrowanie na zmapowanych danych
  return data.filter((item: any) => {
    return [
      "createdAt",
      "firma",
      "firstName",
      "lastName",
      "userSignature",
      "description",
      "genre",
    ].some((key: string) => {
      const value = item[key];
      if (typeof value === "string") {
        return value.toLowerCase().includes(lowerCaseSearchPhrase);
      }
      if (value instanceof Date) {
        // Jeśli wartość jest datą, nie uwzględniamy jej w filtrowaniu
        return true;
      }
      return false;
    });
  });
}
