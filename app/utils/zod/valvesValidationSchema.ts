import { z } from "Zod";

const ValvesInfoBlockSchema = z.object({
  valveLocation: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  valveType: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  valveSerialNumber: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  pressureOpen: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(0, { message: "Wartość nie może być mniejsze niż 0" }),
  pressureClose: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(0, { message: "Wartość nie może być mniejsze niż 0" }),
  pressureSetting: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(0, { message: "Wartość nie może być mniejsze niż 0" }),
  description: z.string().optional(),
});

export const ValvesValidationSchema = z.object({
  firma: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  type: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  serialNumber: z
    .string({ required_error: "To pole jest wymagane!" })
    .min(1, { message: "To pole jest wymagane!" }),
  infoBlocks: z.array(ValvesInfoBlockSchema).min(1),
});

export type SchemaTypeValves = z.infer<typeof ValvesValidationSchema>;
