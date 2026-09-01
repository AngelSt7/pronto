"use server"

import { AuthProntoInterface } from "../interfaces/user.interface"
import { mockAssignmentsInfo } from "../mock/assigmentTask.mock"
import { mockResponseFromPronto } from "../mock/mainTasks.mock"
import { ProntoService } from "../services/Pronto.service"

export const getTasksServer = async (token: string) => {
    // const response = await ProntoService.getTasks(token)
    return mockResponseFromPronto
}

export const getDetailsTaskServer = async (id: number, token: string) => {
    // const response = await ProntoService.getDetailsTask(id, token)
    return mockAssignmentsInfo
}

export const loginProntoWebServer = async (body: { username: string, password: string }) => {
    const response = await ProntoService.loginProntoWeb(body)
    return response
}

export const loginProntoServer = async (body: AuthProntoInterface) => {
    const response = await ProntoService.loginPronto(body)
    return response
}