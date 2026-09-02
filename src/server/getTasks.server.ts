"use server"

import { AuthProntoInterface } from "../interfaces/user.interface"
import { mockAssignmentsInfo } from "../mock/assigmentTask.mock"
import { mockResponseFromPronto } from "../mock/mainTasks.mock"
import { ProntoService } from "../services/Pronto.service"
import { setCookies } from "../security/cookies";


export const getTasksServer = async (token: string) => {
    // const response = await ProntoService.getTasks(token)
    return await ProntoService.getTasks(token)
}

export const getDetailsTaskServer = async (id: number, token: string) => {
    // const response = await ProntoService.getDetailsTask(id, token)
    return await ProntoService.getDetailsTask(id, token)
}

export const loginProntoWebServer = async (body: { username: string, password: string }) => {
    const response = await ProntoService.loginProntoWeb(body)

             await setCookies([
             { name: "user", value: JSON.stringify(response) },
             { name: "token", value: response.token }
         ])
    return response
}

export const loginProntoServer = async (body: AuthProntoInterface) => {
    const response = await ProntoService.loginPronto(body)
    return response
}