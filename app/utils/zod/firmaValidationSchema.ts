import { z } from "Zod";

export const FirmaValidationSchema = z.object({
  name: z.string().min(1, "To pole jest wymagane!"),
  shortName: z.string().min(1, "To pole jest wymagane!"),
  street: z.string().min(1, "To pole jest wymagane!"),
  houseNumber: z.string().min(1, "To pole jest wymagane!"),
  localNumber: z.string().optional(),
  postCode: z.string().min(1, "To pole jest wymagane!"),
  city: z.string().min(1, "To pole jest wymagane!"),
  tel: z.string().optional(),
  contactEmail: z.string().optional(),
});
