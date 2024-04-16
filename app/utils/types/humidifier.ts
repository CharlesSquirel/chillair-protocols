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
  nameplateVoltage: string;
  nameplatePhase: string;
  nameplateCurrentDraw: string;
  cylinders: Cylinder[];
  materials: Material[];
}

interface Cylinder {
  cylinderNumber: string;
  voltage1: string;
  voltage2: string;
  voltage3: string;
  amper1: string;
  amper2: string;
  amper3: string;
}

export interface Material {
  materialDescription: string;
  materialAmount: string;
}
