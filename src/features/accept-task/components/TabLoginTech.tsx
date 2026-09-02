import Button from '@/app/components/Button';
import TechnicianTag from '@/app/components/TechnicianTag'
import { AuthProntoWebInterface } from '@/src/interfaces/auth.interface';
import { AssignmentInfo } from '@/src/schemas/pronto.schema';
import { loginProntoWebServer } from '@/src/server/getTasks.server';
import { FieldError, Input, Label, Surface, TextField } from '@heroui/react';
import React, { useId, useState } from 'react'

interface TabLoginTechProps {
    data: AssignmentInfo[];
}

export default function TabLoginTech({ data }: TabLoginTechProps) {
      const formId = useId();
      const [formLogin, setFormLogin] = useState<AuthProntoWebInterface>({ username: "", password: "" });
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await loginProntoWebServer(formLogin);
      };
    const [selectedTechnician, setSelectedTechnician] = useState<AssignmentInfo | null>(null);
    const canConfirm = !!selectedTechnician;
    const [modeLogin, setModeLogin] = useState<"login" | "select">("login");


    return (
        <div>
            <h3 className="text-sm font-semibold text-muted mb-3">
                Selecciona un tecnico o ingresa las credenciales de uno
            </h3>

            <div className="flex gap-2 mb-3 ">
                <Button
                    className={`flex-1 px-4 py-2 rounded ${modeLogin === "login" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`} text='Ingresar credenciales'
                    onClick={() => setModeLogin("login")}
                />
                <Button
                    className={`flex-1 px-4 py-2 rounded ${modeLogin === "select" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`} text='Autologin'
                    onClick={() => setModeLogin("select")}
                />
            </div>

            {modeLogin === "select" && (
                <div className="grid grid-cols-3 gap-2">
                    {data.map((item) => (
                        <TechnicianTag
                            key={item.provider.legacyID}
                            technician={item}
                            isSelected={selectedTechnician?.provider.legacyID === item.provider.legacyID}
                            onSelect={setSelectedTechnician}
                        />
                    ))}
                    {data.length === 0 && (
                        <p className="text-sm text-muted italic">
                            No hay técnicos disponibles para esta tarea.
                        </p>
                    )}
                </div>
            )}

            {modeLogin === "login" && (
<Surface variant="default">
        <form id={formId} onSubmit={handleSubmit} className="flex flex-col gap-4">

          <TextField
            name="username"
            type="email"
            variant="secondary"
            isRequired
            value={formLogin?.username}
            onChange={(val) => setFormLogin((prev) => ({ ...prev, username: val }))}
            validate={(value) => {
              if (!value) return "El correo es obligatorio";
              if (!value.endsWith("@gyga.pe")) return "Solo se permiten correos @gyga.pe";
            }}
          >
            <Label>Email</Label>
            <Input placeholder="usuario@gyga.pe" />
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
      </Surface>
            )}
        </div>
    )
}
