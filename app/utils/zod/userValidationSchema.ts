import { z } from "zod";
import { createStringValidator } from "./zodHelpers";

export const UserValidationSchema = z.object({
  firstName: createStringValidator(),
  lastName: createStringValidator(),
  userSignature: createStringValidator(),
  email: createStringValidator().email({
    message: "Nieprawidłowy format email",
  }),
  password: createStringValidator().min(6, {
    message: "Hasło musi mieć minimum 6 znaków",
  }),
});
