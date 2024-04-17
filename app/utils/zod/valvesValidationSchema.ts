import { z } from "Zod";
import { createNumberValidator, createStringValidator } from "./zodHelpers";

const ValvesInfoBlockSchema = z.object({
  valveLocation: createStringValidator(),
  valveType: createStringValidator(),
  valveSerialNumber: createStringValidator(),
  pressureOpen: createNumberValidator(),
  pressureClose: createNumberValidator(),
  pressureSetting: createNumberValidator(),
  description: z.string().optional(),
});

export const ValvesValidationSchema = z.object({
  firma: createStringValidator(),
  type: createStringValidator(),
  serialNumber: createStringValidator(),
  infoBlocks: z.array(ValvesInfoBlockSchema).min(1),
});

export type SchemaTypeValves = z.infer<typeof ValvesValidationSchema>;
