import { z } from "zod";
import { createNumberValidator, createStringValidator } from "./zodHelpers";

const CylinderInfoSchema = z.object({
  cylinderNumber: createStringValidator(),
  voltage1: createNumberValidator(),
  voltage2: createNumberValidator(),
  voltage3: createNumberValidator(),
  amper1: createNumberValidator(),
  amper2: createNumberValidator(),
  amper3: createNumberValidator(),
});

const MaterialInfoSchema = z.object({
  materialDecription: createStringValidator(),
  materialAmount: createNumberValidator(),
});

export const HumidifierValidationSchema = z.object({
  firma: createStringValidator(),
  type: createStringValidator(),
  serialNumber: createStringValidator(),
  protectionType: createStringValidator(),
  ratedCurrent: createStringValidator(),
  description: z.string().optional(),
  nameplateVoltage: createNumberValidator(),
  nameplatePhase: createNumberValidator(),
  nameplateCurrentDraw: createNumberValidator(),
  cylinders: z.array(CylinderInfoSchema).length(2),
  materials: z.array(MaterialInfoSchema).min(1),
});

export type SchemaTypeHumidifier = z.infer<typeof HumidifierValidationSchema>;
