import { z } from "Zod";
import { createStringValidator } from "./zodHelpers";

export const UserValidationSchema = z.object({
  firstName: createStringValidator(),
  lastName: createStringValidator(),
  userSignature: createStringValidator(),
  email: createStringValidator(),
  password: createStringValidator(),
});
