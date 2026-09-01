import { z } from "zod";
import { authProntoSchema, authUserProntoWebSchema } from "../schemas/auth.schema";

export type UserInterface = z.infer<typeof authUserProntoWebSchema>;
export type AuthProntoInterface = z.infer<typeof authProntoSchema>;