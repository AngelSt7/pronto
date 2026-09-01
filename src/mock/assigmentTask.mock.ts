import { AssignmentInfo } from "../schemas/pronto.schema";

export const mockAssignmentsInfo: { data: { installationTask_GetAssignmentsInfo: AssignmentInfo[] } } = {
    data: {
        installationTask_GetAssignmentsInfo: [
            {
                provider: {
                    name: "JONATAN MESIAS",
                    legacyID: 38186,
                    user: { company: { id: 52, name: "GYGA CONSULTING" } },
                },
            },
            {
                provider: {
                    name: "FRANK MAGALLANES",
                    legacyID: 37079,
                    user: { company: { id: 52, name: "GYGA CONSULTING" } },
                },
            },
            {
                provider: {
                    name: "WILFREDO CASTILLO",
                    legacyID: 39996,
                    user: { company: { id: 52, name: "GYGA CONSULTING" } },
                },
            },
        ]
    }
}