interface AllProtocolsRecord {
  createdAt: string;
  genre: string;
  firstName: string;
  lastName: string;
  userSignature: string;
  firma: string;
  id: string;
}

export type AllProtocolsRecords = AllProtocolsRecord[];

export interface UserCredentials {
  name: string;
  email: string;
  password: string;
}
