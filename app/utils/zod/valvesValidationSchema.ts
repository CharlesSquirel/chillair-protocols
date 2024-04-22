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
  infoBlocks: z
    .array(ValvesInfoBlockSchema)
    .min(1)
    .transform((blocks) => {
      // Sprawdź, czy wszystkie valveSerialNumber są unikalne
      const serialNumbers = blocks.map((block) => block.valveSerialNumber);
      if (new Set(serialNumbers).size !== serialNumbers.length) {
        throw new Error("valveSerialNumber must be unique within infoBlocks");
      }
      return blocks;
    }),
  description: z.string().optional(),
  clientEmailPerm: z.boolean().optional(),
  clientEmail: z.string().optional(),
});

export type SchemaTypeValves = z.infer<typeof ValvesValidationSchema>;
