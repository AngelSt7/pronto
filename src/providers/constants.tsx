import React from 'react';
import { ScheduleType } from '../interfaces/generic.interface';
import Schedule from '@/app/components/Schedule';
import AccepTask from '@/app/components/AccepTask';
import { AssignmentInfo } from '../schemas/pronto.schema';
import { GetTaskToProntoInterface } from '../interfaces/pronto.interface';

// 1. Mapa de datos requeridos por modal
export interface ModalDataMap {
  accept_tasks: { schedules: ScheduleType[], data: AssignmentInfo[], task: GetTaskToProntoInterface };
  confirm_delete: { id: string };
}

// 2. Tipo extraído directamente de las keys
export type ModalType = keyof ModalDataMap;

// 3. Diccionario 100% tipado
export const CHILDRENS_COMPONENTS: {
  [K in ModalType]: (props: ModalDataMap[K]) => React.ReactNode;
} = {
  accept_tasks: ({ schedules, data, task }) => (
    <AccepTask schedules={schedules} data={data} task={task} />
  ),
  confirm_delete: ({ id }) => (
    <div>¿Eliminar {id}?</div>
  ),
};