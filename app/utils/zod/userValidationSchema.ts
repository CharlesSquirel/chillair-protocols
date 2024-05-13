import { z } from "zod";
import { createStringValidator } from "./zodHelpers";

export const UserValidationSchema = z.object({
  firstName: createStringValidator(),
  lastName: createStringValidator(),
  userSignature: createStringValidator(),
  email: createStringValidator().email({
    message: "Nieprawidłowy format email",
  }),
});
