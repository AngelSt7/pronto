import Button from "@/app/components/Button";
import { UserInterface } from "@/src/interfaces/user.interface";
import { loginProntoServer } from "@/src/server/getTasks.server";
import { FieldError, Input, Label, TextField } from "@heroui/react";
import { useId, useState } from "react";

interface FormLogin {
    userName: string
    password: string;
}

interface FormTechLoginProps {
    onSession: (session: UserInterface) => void;
}

export default function FormTechLogin({ onSession }: FormTechLoginProps) {
    const formId = useId();
    const [formLogin, setFormLogin] = useState<FormLogin>({ userName: "", password: "" });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await loginProntoServer(formLogin);
        onSession(response);
    }

    return (
        <div>
            <form autoComplete="off" id={formId} onSubmit={handleSubmit} className="flex flex-col gap-4">

                <TextField
                    name="username"
                    type="email"
                    variant="secondary"
                    isRequired
                    value={formLogin?.userName}
                    onChange={(val) => setFormLogin((prev) => ({ ...prev, userName: val }))}
                    validate={(value) => {
                        if (!value) return "El correo es obligatorio";
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="usuario@gmail.pe" />
                    <FieldError />
                </TextField>

                <TextField
                    name="password"
                    type="password"
                    variant="secondary"
                    isRequired
                    value={formLogin?.password}
                    onChange={(val) => setFormLogin((prev) => ({ ...prev, password: val }))}
                    validate={(value) => {
                        if (!value) return "La contraseña es obligatoria";
                        if (value.length < 6) return "Mínimo 6 caracteres";
                    }}
                >
                    <Label>Contraseña</Label>
                    <Input placeholder="Ingresa tu contraseña" />
                    <FieldError />
                </TextField>

                <div className="flex justify-end gap-3 pt-5">
                    <Button
                        text="Iniciar sesión"
                        className="w-full bg-[#121212] text-zinc-200 hover:bg-[#1f1f1f] hover:text-zinc-100 transition-colors duration-300"
                        type="submit"
                    />
                </div>

            </form>
        </div>
    )
}
