export interface HumidifierDTO {
  email: string;
  userSignature: string;
  userId: string;
  firma: string;
  type: string;
  serialNumber: string;
  protectionType: string;
  ratedCurrent: string;
  description?: string;
  nameplateVoltage: number;
  nameplatePhase: number;
  nameplateCurrentDraw: number;
  cylinders: Cylinder[];
  materials: Material[];
}

interface Cylinder {
  cylinderNumber: string;
  voltage1: number;
  voltage2: number;
  voltage3: number;
  amper1: number;
  amper2: number;
  amper3: number;
}

export interface Material {
  materialDescription: string;
  materialAmount: number;
}
