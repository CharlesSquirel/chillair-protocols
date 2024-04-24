import { z } from "Zod";
import { createNumberValidator, createStringValidator } from "./zodHelpers";

export const FirmaValidationSchema = z.object({
  name: createStringValidator(),
  shortName: createStringValidator().max(10, {
    message: "To pole nie może mieć więcej niż 10 znaków!",
  }),
  street: createStringValidator(),
  houseNumber: createNumberValidator(),
  localNumber: z
    .number({
      invalid_type_error: "To pole jest wymagane!",
    })
    .optional(),
  postCode: createStringValidator()
    .length(6, {
      message: "Kod pocztowy musi składać się z 6 znaków!",
    })
    .regex(/^\d{2}-\d{3}$/, { message: "To nie jest poprawny kod pocztowy!" }),
  city: createStringValidator(),
  tel: z
    .string()
    .optional()
    .refine((value) => !value || /^[\d\s-]+$/.test(value), {
      message: "To nie jest poprawny numer telefonu!",
    }),

  contactEmail: z.string().optional(),
});
