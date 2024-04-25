import { z } from "zod";
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
  description: z.string().optional(),
  clientEmailPerm: z.boolean().optional(),
  clientEmail: z.string().optional(),
});

export type SchemaTypeValves = z.infer<typeof ValvesValidationSchema>;
