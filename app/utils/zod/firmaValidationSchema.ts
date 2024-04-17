import { z } from "Zod";
import { createStringValidator } from "./zodHelpers";

export const FirmaValidationSchema = z.object({
  name: createStringValidator(),
  shortName: createStringValidator(),
  street: createStringValidator(),
  houseNumber: createStringValidator(),
  localNumber: z.string().optional(),
  postCode: createStringValidator(),
  city: createStringValidator(),
  tel: z.string().optional(),
  contactEmail: z.string().optional(),
});
