interface ValvesRecord {
  createdAt: string;
  firma: string;
  firstName: string;
  lastName: string;
  userSignature: string;
  description?: string;
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
  firstName: string;
  lastName: string;
  userSignature: string;
  userId: string;
  clientEmail?: string;
  clientEmailPerm: boolean;
  description?: string;
}

export type ValvesRecords = ValvesRecord[];
