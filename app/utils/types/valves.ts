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
  infoBlocks: ValvesInfoBlock[];
}

export interface CreateValveCredentials {
  firma: string;
  type: string;
  serialNumber: string;
  infoBlocks: ValvesInfoBlock[];
  email: string;
  userSignature: string;
  userId: string;
}

export type ValvesRecords = ValvesRecord[];
