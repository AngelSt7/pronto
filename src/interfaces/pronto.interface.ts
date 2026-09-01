import z from "zod";
import { GetTaskToProntoSchema as GetTaskToProntoSchema, AddressSchema, UbigeoSchema } from "../schemas/pronto.schema";

export type GetTaskToProntoInterface = z.infer<typeof GetTaskToProntoSchema>;
export type AddressInterface = z.infer<typeof AddressSchema>;
export type UbigeoInterface = z.infer<typeof UbigeoSchema>;
