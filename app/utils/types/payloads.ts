interface ValvesRecord {
  date: string;
  firma: string;
  author: string;
  serialNumber: string;
  another: string;
}

interface ValvesInfoBlock {
  valveLocation: string;
  valveType: string;
  valveSerialNumber: string;
  pressureOpen: number;
  pressureClose: number;
  pressureSetting: number;
  description?: string;
}

export interface ValvesCredentials {
  firma: string;
  type: string;
  serialNumber: string;
  infoBlock: ValvesInfoBlock[];
}

export type ValvesRecords = ValvesRecord[];

interface AllProtocolsRecord {
  date: string;
  genre: string;
  author: string;
  signature: string;
  another: string;
}

export type AllProtocolsRecords = AllProtocolsRecord[];
