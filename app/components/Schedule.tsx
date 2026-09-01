"use client";
import { ScheduleType } from "@/src/interfaces/generic.interface";
import { Clock } from "@gravity-ui/icons";

interface ScheduleProps {
  schedule: ScheduleType;
  isSelected?: boolean;
  setSelectedSchedule: (schedule: ScheduleType) => void;
}

export default function Schedule({ schedule, isSelected, setSelectedSchedule }: ScheduleProps) {
  return (
    <button
      type="button"
      onClick={() => setSelectedSchedule(schedule)}
      className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition
        ${isSelected
          ? "border-pink-600 bg-pink-100 text-pink-700"
          : "border-pink-100 bg-pink-50 text-pink-600 hover:bg-pink-100"
        }`}
    >
      <Clock className="size-4" />
      {schedule.labelButton}
    </button>
  );
}