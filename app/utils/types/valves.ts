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

export interface ValveDTO {
  firma: string;
  type: string;
  serialNumber: string;
  infoBlocks: ValvesInfoBlock[];
  clientEmail?: string;
  clientEmailPerm: boolean;
  description?: string;
}

export type ValvesRecords = ValvesRecord[];

export const initialValveInfoBlockEdit = [
  {
    valveLocation: "",
    valveType: "",
    valveSerialNumber: "",
    pressureOpen: 0,
    pressureClose: 0,
    pressureSetting: 0,
    description: undefined,
  },
];

export const initialValveEdit = {
  firma: "",
  type: "",
  serialNumber: "",
  clientEmail: undefined,
  clientEmailPerm: false,
  description: undefined,
};
