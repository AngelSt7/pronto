import { z } from "zod";

const authProntoWebSchema = z.object({
    username: z.string(),
    password: z.string()
})

const authUserProntoWebSchema = z.object({
    id: z.number().int().positive(),
    login: z.string(),
    type: z.number().int().nonnegative(),
    name: z.string(),
    token: z.string()
})

export { authProntoWebSchema, authUserProntoWebSchema }