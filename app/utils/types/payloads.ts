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
