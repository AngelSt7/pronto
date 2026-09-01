import { z } from 'zod';

export const UbigeoSchema = z.object({
  district: z.string(),
  province: z.string(),
  department: z.string(),
});

export const AddressSchema = z.object({
  ubigeo: UbigeoSchema,
  street: z.string(),
});

export const GetTaskToProntoSchema = z.object({
  id: z.number(),
  customerCode: z.string(),
  address: AddressSchema,
  dateTimeFrom: z.string().datetime().or(z.string()),
});

export const GetTasksToProntoSchema = z.array(GetTaskToProntoSchema);

const CompanySchema = z.object({
    id: z.number(),
    name: z.string(),
});

const UserSchema = z.object({
    company: CompanySchema,
});

const ProviderSchema = z.object({
    name: z.string(),
    legacyID: z.number(),
    user: UserSchema,
});

export const AssignmentInfoSchema = z.object({
    provider: ProviderSchema,
});

export const ListAssingmentInfoSchema = z.array(AssignmentInfoSchema);

export type AssignmentInfo = z.infer<typeof AssignmentInfoSchema>;

