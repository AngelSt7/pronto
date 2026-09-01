import { z } from "zod";
import { authUserProntoWebSchema } from "../schemas/auth.schema";

export type UserInterface = z.infer<typeof authUserProntoWebSchema>;
export type FormLoginInterface = z.infer<typeof formLogin>;