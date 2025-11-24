"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import StatusFilter from "./StatusFilter";
import SortDropdown from "./SortDropdown";
import DateRangeDropdown from "./DateRangeDropdown";

export default function InvoiceFilters({sortOption, setSortOption}: {sortOption: string; setSortOption: (option: string) => void;}) {
  const [clientFilter, setClientFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const [dateRange, setDateRange] = useState("all");




  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-4">
        {/* Client filter */}
        <div className="relative min-w-[200px]">
          <select
            value={clientFilter}
            onChange={(e) => setClientFilter(e.target.value)}
            className="appearance-none min-w-[200px] bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All clients</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Status filter */}
        <div className="relative">
          <StatusFilter

          />
        </div>

        {/* Date picker */}
        <div className="relative">
          <DateRangeDropdown dateRange={dateRange} setDateRange={setDateRange} /> 
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center justify-end gap-4">
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Sort by:</span>
          <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>
    </div>
  );
}
