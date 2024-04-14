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
  pressureOpen: string;
  pressureClose: string;
  pressureSetting: string;
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

export interface UserCredentials {
  name: string;
  email: string;
  password: string;
}
