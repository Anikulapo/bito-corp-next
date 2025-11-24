"use client";

import { Search } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setSearchTerm, setStatusFilter } from "@/state/invoice/invoiceSlice";
import Uncollectible from "../status/Uncollectable";

const tabs = [
  { key: "all", label: "All" },
  { key: "awaiting", label: "Outstanding" },
  { key: "paid", label: "Paid" },
  { key: "uncollectable", label: "Uncollectable" },
];

export default function InvoiceTabs() {
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.invoices.searchTerm);
  const statusFilter = useAppSelector((state) => state.invoices.statusFilter);
  const invoices = useAppSelector((state) => state.invoices.invoices);

  const handleTabClick = (key: string) => {
    dispatch(setStatusFilter(key as "all" | "awaiting" | "paid" | "uncollectable")); 
  };

  const counts = {
    all: invoices.length,
    paid: invoices.filter((i) => i.status === "paid").length,
    uncollectable: invoices.filter((i) => i.status === "uncollectable").length,
    awaiting: invoices.filter((i) => i.status === "awaiting").length,
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <div className="flex gap-6 mb-6 justify-between border-b border-[#E1E3E6]">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`pb-3 font-medium transition-colors cursor-pointer ${
              statusFilter === tab.key
                ? "text-[#5258E4] border-b-2 border-[#5258E4]"
                : "text-primary "
            }`}
          >
            {tab.label} ({counts[tab.key as keyof typeof counts] || 0})
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative ml-4">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Try invoice# or client name"
          className="pl-10 pr-4 py-2 focus:outline-0 font-trade w-64"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
