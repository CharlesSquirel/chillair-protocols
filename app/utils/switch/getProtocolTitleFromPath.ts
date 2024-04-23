export const getProtocolTitleFromPath = (path: string): string => {
  switch (true) {
    case path.includes("valve"):
      return "badania zaworów bezpieczeństwa";
    case path.includes("humidifier"):
      return "badania nawilżacza";
    default:
      return "";
  }
};
