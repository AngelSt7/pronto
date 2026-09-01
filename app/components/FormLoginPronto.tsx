"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Tab } from "./OrquestTabs";
import { ProntoService } from "@/src/services/Pronto.service";
import { UserInterface } from "@/src/interfaces/user.interface";
import Button from "./Button";
import AuthModal from "@/src/providers/AuthModal";
import LoginProntoWeb from "./LoginProntoWeb";

interface FormLogin {
    userName?: string
    password?: string;
}

export default function FormLoginPronto({setActiveTab, setUser}: {setActiveTab: Dispatch<SetStateAction<Tab>>, setUser: Dispatch<SetStateAction<UserInterface | null>>}) {

    const [formLogin, setFormLogin] = useState<FormLogin>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormLogin({
            ...formLogin,
            [e.target.name]: e.target.value
        })
    }

     const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //  e.preventDefault();
    //  const response = await ProntoService.login(formLogin?.userName || "", formLogin?.password || "")
    //  setUser(response)
    //  setActiveTab("aceptTask")
 }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">

           
        </div>  
    )
}
