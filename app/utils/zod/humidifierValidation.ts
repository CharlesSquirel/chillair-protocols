import { z } from "Zod";

const CylinderInfoSchema = z.object({
  cylinderNumber: z.string().min(1, "To pole jest wymagane!"),
  voltage1: z.string().min(0, "To pole jest wymagane!"),
  voltage2: z.string().min(0, "To pole jest wymagane!"),
  voltage3: z.string().min(0, "To pole jest wymagane!"),
  amper1: z.string().min(0, "To pole jest wymagane!"),
  amper2: z.string().min(0, "To pole jest wymagane!"),
  amper3: z.string().min(0, "To pole jest wymagane!"),
});

const MaterialInfoSchema = z.object({
  materialDecription: z.string().min(1, "To pole jest wymagane!"),
  materialAmount: z.number().min(0, "To pole nie może być ujemne!"),
});

export const HumidifierValidationSchema = z.object({
  firma: z.string().min(1, "To pole jest wymagane!"),
  type: z.string().min(1, "To pole jest wymagane!"),
  serialNumber: z.string().min(1, "To pole jest wymagane!"),
  protectionType: z.string().min(1, "To pole jest wymagane!"),
  ratedCurrent: z.string().min(1, "To pole jest wymagane!"),
  description: z.string().optional(),
  nameplateVoltage: z.number().min(0, "To pole musi być większe od zera"),
  nameplatePhase: z.number().min(0, "To pole musi być większe od zera"),
  nameplateCurrentDraw: z.number().min(0, "To pole musi być większe od zera"),
  cylinders: z.array(CylinderInfoSchema).length(2),
  materials: z.array(MaterialInfoSchema),
});
