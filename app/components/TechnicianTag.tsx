"use client";
import { AssignmentInfo } from "@/src/schemas/pronto.schema";
import { Person } from "@gravity-ui/icons";

interface TechnicianTagProps {
  technician: AssignmentInfo;
  isSelected: boolean;
  onSelect: (technician: AssignmentInfo) => void;
}

export default function TechnicianTag({ technician, isSelected, onSelect }: TechnicianTagProps) {
  const { name, user } = technician.provider;

  return (
    <button
      type="button"
      onClick={() => onSelect(technician)}
      className={`flex items-center gap-2 rounded-full border px-3 py-2 text-left transition
        ${isSelected
          ? "border-pink-600 bg-pink-50 text-pink-700"
          : "border-gray-200 bg-white text-gray-700 hover:border-pink-300"
        }`}
    >
      <span
        className={`flex size-7 items-center justify-center rounded-full ${
          isSelected ? "bg-pink-600 text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        <Person className="size-4" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs text-muted">{user.company.name}</span>
      </span>
    </button>
  );
}