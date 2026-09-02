"use client"
import { AssignmentInfo } from '@/src/schemas/pronto.schema';
import { useState } from 'react';
import SelectedButtons from './SelectedButtons';
import FormTechLogin from './FormTechLogin';
import { UserInterface } from '@/src/interfaces/user.interface';
import Button from '@/app/components/Button';
import SelectTech from './SelectTech';

interface StepLoginProps {
    data: AssignmentInfo[];
}

function getInitials(name: string) {
    return name
        .trim()
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export default function StepLogin({ data }: StepLoginProps) {
    const [typeLogin, setTypeLogin] = useState<"login" | "autologin">("autologin");
    const [session, setSession] = useState<UserInterface | null>(null);

    if (session) {
        return (
            <div className="select-none flex flex-col items-center text-center gap-3 py-2 ">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-semibold">
                    {getInitials(session.name)}
                </div>
                <div>
                    <p className="text-xl font-semibold text-zinc-800">{session.name}</p>
                    <div className="flex items-center justify-center gap-1.5 mt-1 text-sm text-emerald-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Sesión temporal activa
                    </div>
                </div>
                <div className='flex gap-3 items-center justify-center'>
                <Button
                    type="button"
                    onClick={() => setSession(null)}
                    className="bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border border-red-200"
                    text="Cerrar sesión"
                    />
                <Button
                    type="button"
                    onClick={() => setSession(null)}
                    className="flex-equal bg-foreground text-white hover:bg-gray-700 rounded-xl"
                    text="Siguiente paso"
                    />
                    </div>
            </div>
        );
    }

    return (
        <div>
            <h3 className="text-lg font-semibold text-zinc-700 mb-3 text-center ">
                Selecciona un tecnico o ingresa las credenciales de uno
            </h3>
            <SelectedButtons onPress={setTypeLogin} typeLogin={typeLogin} />
            {typeLogin === "login" && <FormTechLogin onSession={setSession} />}
            {typeLogin === "autologin" && <SelectTech data={data} />}

            
        </div>
    );
}