import TechnicianTag from '@/app/components/TechnicianTag'
import { ScheduleType } from '@/src/interfaces/generic.interface';
import { AssignmentInfo } from '@/src/schemas/pronto.schema';
import React, { useState } from 'react'

interface SelectTechProps {
    data: AssignmentInfo[];
}

export default function SelectTech({ data }: SelectTechProps) {
    const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType | null>(null);
      const [selectedTechnician, setSelectedTechnician] = useState<AssignmentInfo | null>(null);

  return (
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
  )
}
