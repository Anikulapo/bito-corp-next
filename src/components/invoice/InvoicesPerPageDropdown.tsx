"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setItemsPerPage } from "@/state/invoice/invoiceSlice";

const options = [10, 20, 50, 100];

export default function InvoicesPerPageDropdown() {
  const perPage = useAppSelector((state) => state.invoices.itemsPerPage);
  const dispatch = useAppDispatch();

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
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: number) => {
    dispatch(setItemsPerPage(value)); 
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      {open && (
        <div className="absolute bottom-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((value) => (
            <button
              key={value}
              onClick={() => handleSelect(value)}
              className={`block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 ${
                perPage === value ? "font-semibold bg-gray-100" : ""
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-1 items-center w-full bg-white border border-gray-300 rounded-lg px-2 py-2 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {perPage}
        <ChevronDown size={16} />
      </button>
    </div>
  );
}
