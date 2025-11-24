"use client";

import { useState, useRef, useEffect } from "react";
import { Calendar } from "lucide-react";

type Props = {
  dateRange: string;
  setDateRange: (range: string) => void;
};

const options = [
  { key: "all", label: "All Time" },
  { key: "3m", label: "Last 3 Months" },
  { key: "6m", label: "Last 6 Months" },
  { key: "1y", label: "Last 1 Year" },
];

export default function DateRangeDropdown({ dateRange, setDateRange }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (key: string) => {
    setDateRange(key);
    setOpen(false);
  };

  const selectedLabel = options.find((o) => o.key === dateRange)?.label ?? "All Time";

  return (
    <div className="relative w-52" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedLabel}
        <Calendar size={18} />
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.key}
              onClick={() => handleSelect(option.key)}
              className={`block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                dateRange === option.key ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
