import apiPronto from "../config/axios/api-pronto.axios";
import { authUserProntoWebSchema } from "../schemas/auth.schema";
import { setCookies } from "../security/cookies";
import { GetTaskToProntoInterface } from "../interfaces/pronto.interface";
import { AssignmentInfoSchema, GetTasksToProntoSchema, ListAssingmentInfoSchema } from "../schemas/pronto.schema";
import { FormLoginInterface, UserInterface } from "../interfaces/user.interface";
import { AuthProntoWebInterface } from "../interfaces/auth.interface";

export class ProntoService {

    static loginProntoWeb = async (body: AuthProntoWebInterface) => {
        const response = await apiPronto.post("/login", body);
        const match = authUserProntoWebSchema.safeParse(response.data);
        if (!match.success) {
            throw new Error("Login failed");
        }
        await setCookies([
            { name: "user", value: JSON.stringify(response.data) },
            { name: "token", value: response.data.token }
        ])
        return response.data;
    }


    static login = async (body: FormLoginInterface): Promise<UserInterface> => {
        const buildBody = { ...body, deviceID: "c6c8f62f-8703-455b-b98a-7e69be2d7dc1" };
        const responseAxi = await apiPronto.post("/login", buildBody);
        const match = authUserProntoWebSchema.safeParse(responseAxi.data);
        if (!match.success) {
            throw new Error("Login failed");
        }
        return responseAxi.data;
    }

    static getTasks = async (token: string): Promise<GetTaskToProntoInterface[]> => {
        const response = await apiPronto.post("/query", this.getQueryToFindTasks(), {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const breakpoint = response.data.data.maintenanceManager_FindTasks;
        const match = GetTasksToProntoSchema.safeParse(breakpoint);

        if (!match.success) {
            throw new Error("Get tasks failed");
        }   

        return breakpoint;
    }

    static getDetailsTask = async (id: number, token: string) => {
        const response = await apiPronto.post("query", this.getQueryToFindAssignments(id), {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const breakpoint = response.data.data.installationTask_GetAssignmentsInfo;
        const match = ListAssingmentInfoSchema.safeParse(breakpoint);
        if (!match.success) {
            throw new Error("Get details task failed");
        }
        return match.data;
    }   

    static AcceptTaskContent = async (task: number, time: string, token: string) => {
        const response = await fetch("https://api.geopronto.com/api/query", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                "query": "mutation AcceptInstallationTask($task: Int!, $accept: Boolean!, $time: String!, $comment: String) { installationTask_Accept(id: $task, accept: $accept, time: $time, comment: $comment) { __typename } }",
                "variables": {
                    task: task,
                    accept: true,
                    time,
                    comment: null
                }
            }),
        });

        if (!response.ok) {
            throw new Error("Accept task failed");
        }
    }

    private static getQueryToFindAssignments(id: number) {
        return {
            operationName: "installationTask_GetAssignmentsInfo",
            variables: { id },
            query: `mutation installationTask_GetAssignmentsInfo($id: Int!) {
      installationTask_GetAssignmentsInfo(id: $id) {
        provider {
          name
          legacyID
          user {
            company {
              id
              name
            }
          }
        }
      }
    }`
        };
    }

    private static getQueryToFindTasks() {
        const { dateTimeFrom, dateTimeTo } = this.getDateRange();
        return {
            operationName: "findTaskInstallationTask",
            variables: {
                query: {
                    dateTimeFrom,
                    dateTimeTo,
                    status: ["provider-confirmation"]
                }
            },
            query: `mutation findTaskInstallationTask($query: taskInstallationTaskQueryInput!) {
        maintenanceManager_FindTasks(query: $query) {
          id
          customerCode
          address {
            ubigeo { district province department }
            street
          }
          dateTimeFrom
        }
      }`
        };
    }

    private static getDateRange = (baseDate: Date = new Date()) => {
        const from = new Date(baseDate);
        from.setDate(baseDate.getDate() - 1);

        const to = new Date(baseDate);
        to.setDate(baseDate.getDate() + 4);

        return {
            dateTimeFrom: from.toISOString(),
            dateTimeTo: to.toISOString(),
        };
    };
}