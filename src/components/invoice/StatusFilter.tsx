"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setStatusFilter } from "@/state/invoice/invoiceSlice";
import { InvoiceStatus } from "@/state/invoice/invoiceSlice";
const statuses = [
  { key: "all", label: "All Status" },
  { key: "awaiting", label: "Awaiting" },
  { key: "paid", label: "Paid" },
  { key: "overdue", label: "Overdue" },
  { key: "uncollectible", label: "Uncollectible" },
];

export default function StatusFilter() {
  const dispatch = useAppDispatch();
  const statusFilter = useAppSelector((state) => state.invoices.statusFilter);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
    dispatch(setStatusFilter(key as "all" | InvoiceStatus));
    setOpen(false);
  };

  const selectedLabel = statuses.find((s) => s.key === statusFilter)?.label ?? "All Status";

  return (
    <div className="relative w-52" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-secondary hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedLabel}
        <ChevronDown size={18} />
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {statuses.map((status) => (
            <button
              key={status.key}
              onClick={() => handleSelect(status.key)}
              className={`block w-full text-left px-4 py-2 text-secondary hover:bg-gray-100 ${
                statusFilter === status.key ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {status.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
