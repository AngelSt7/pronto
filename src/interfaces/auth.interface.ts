import { z } from "zod";
import { authProntoWebSchema } from "../schemas/auth.schema";

export type AuthProntoWebInterface = z.infer<typeof authProntoWebSchema>;