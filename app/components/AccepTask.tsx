"use client";
import { ScheduleType } from "@/src/interfaces/generic.interface";
import Schedule from "./Schedule";
import { useState } from "react";
import { AssignmentInfo } from "@/src/schemas/pronto.schema";
import { GetTaskToProntoInterface } from "@/src/interfaces/pronto.interface";
import TechnicianTag from "./TechnicianTag";
import Button from "./Button";
import TabLoginTech from "@/src/features/accept-task/components/TabLoginTech";
import StepLogin from "@/src/features/accept-task/components/StepLogin/StepLogin";

interface AcceptTaskProps {
  schedules: ScheduleType[];
  data: AssignmentInfo[];
  task: GetTaskToProntoInterface;
}

export default function AccepTask({ schedules, data, task }: AcceptTaskProps) {
  const [ step, selectTab ] = useState<"login" | "select" | "confirm">("login");

  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(null);
  const [selectedTechnician, setSelectedTechnician] = useState<AssignmentInfo | null>(null);

  const canConfirm = !!selectedSchedule && !!selectedTechnician;

  const handleConfirm = () => {
    if (!canConfirm) return;
    // TODO: llamar a tu mutation de aceptar/asignar tarea
    console.log({
      taskId: task.id,
      technicianLegacyID: selectedTechnician!.provider.legacyID,
      schedule: selectedSchedule!.value,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Técnicos */}
      
      {step === "login" && ( <StepLogin data={data} /> )}

      {/* Horarios */}
      {/* <div>
        <h3 className="text-sm font-semibold text-muted mb-3">
          {selectedSchedule ? `Horario: ${selectedSchedule.labelText}` : "Selecciona un horario"}
        </h3>
        <div className="grid grid-cols-3 gap-3 select-none">
          {schedules.map((schedule, index) => (
            <Schedule
              setSelectedSchedule={setSelectedSchedule}
              key={index}
              schedule={schedule}
              isSelected={selectedSchedule?.value === schedule.value}
            />
          ))}
        </div>
      </div> */}

      {/* <div className="flex justify-end gap-3 pt-5">
        <Button
          size="lg"
          text="Iniciar sesión"
          className="w-full bg-[#121212] text-zinc-200 hover:bg-[#1f1f1f] hover:text-zinc-100 transition-colors duration-300 p-4"
          type="submit"
        />
      </div> */}
    </div>
  );
}