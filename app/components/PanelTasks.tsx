"use client";

import { useState, useTransition } from "react";
import { GetTaskToProntoInterface } from "@/src/interfaces/pronto.interface";
import { getDetailsTaskServer, getTasksServer } from "@/src/server/getTasks.server";
import Button from "./Button";
import { MapPin, House, Clock } from '@gravity-ui/icons';
import SpinnerCharge from "@/src/components/ui/SpinnerCharge";
import { ScheduleType } from "@/src/interfaces/generic.interface";
import { mainStore } from "@/src/store/main.store";
import GenericModal from "@/src/providers/GenericModal";

function formatTime(isoString: string): string {
  const date = new Date(isoString);
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'p. m.' : 'a. m.';
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${minutes} ${period}`;
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function PanelTasks({ token, data, schedules }: { token: string; data: GetTaskToProntoInterface[]; schedules: ScheduleType[] }) {
  const [tasks, setTasks] = useState<GetTaskToProntoInterface[]>(data.slice(0, 4));
  const openModal = mainStore((store) => store.openModal);
  const [loadingTaskId, setLoadingTaskId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isPendingTasks, startTransitionTasks] = useTransition();

  const handleCardClick = (task: GetTaskToProntoInterface) => {
    setLoadingTaskId(task.id);

    startTransitionTasks(async () => {
      try {
        const response = await getDetailsTaskServer(Number(loadingTaskId), token);
        openModal(
          "accept_tasks",
          { schedules, data: response.data.installationTask_GetAssignmentsInfo, task }
        );
      } catch (error) {
        console.error("Error al cargar la tarea:", error);
      } finally {
        setLoadingTaskId(null);
      }
    });
  };

  const handleTasks = async () => {
    startTransition(async () => {
      await sleep(3000);
      const response = await getTasksServer(token);
      setTasks(response.data.data.maintenanceManager_FindTasks.slice(0, 4));
    });
  }

  return (
    <div>
      <Button
        text={isPending ? "Actualizando Tareas" : "Actualizar Tareas"}
        type="button"
        onClick={handleTasks}
      />

      {isPending || isPendingTasks && (
        <SpinnerCharge />
      )}

      <div className="grid grid-cols-4 gap-4 my-4 select-none">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-200 p-4 rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl shadow hover:shadow-md transition-shadow"
            onClick={() => handleCardClick(task)}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold text-gray-900">{task.customerCode}</h2>
              <span className="flex items-center gap-1 text-xs font-medium text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                <Clock width={14} height={14} />
                {formatTime(task.dateTimeFrom)}
              </span>
            </div>

            <div className="flex items-start gap-1.5 text-sm text-gray-500 mb-1">
              <MapPin width={16} height={16} className="mt-0.5 text-gray-400" />
              <span className="truncate">
                {task.address.ubigeo.department}, {task.address.ubigeo.province}, {task.address.ubigeo.district}
              </span>
            </div>

            <div className="flex items-start gap-1.5 text-sm text-gray-400">
              <House width={16} height={16} className="mt-0.5 text-gray-400" />
              <span>{task.address.street}</span>
            </div>
          </div>
        ))}
      </div>

      <GenericModal />
    </div>
  )
}
