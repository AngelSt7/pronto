"use client";

import { FieldError, Input, Label, Surface, TextField } from "@heroui/react";
import Button from "./Button";
import { useState, useId, FormEvent } from "react";
import { ProntoService } from "@/src/services/Pronto.service";
import { AuthProntoWebInterface } from "@/src/interfaces/auth.interface";

export default function LoginProntoWeb() {
  const formId = useId();
  const [formLogin, setFormLogin] = useState<AuthProntoWebInterface>({ username: "", password: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await ProntoService.loginProntoWeb(formLogin);
    console.log(response.data);
  };

  return (
    <>
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


    </>
  );
}