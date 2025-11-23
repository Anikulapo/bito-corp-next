"use client";

import { useState } from "react";
import {  ChevronDown, Calendar } from "lucide-react";

export default function InvoiceFilters() {
  const [clientFilter, setClientFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");


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
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none min-w-[200px] bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Date picker */}
        <div className="relative">
          <button className="flex items-center min-w-[200px] justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:border-gray-400">
            All Time
            <Calendar size={18} />
          </button>
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Invoice#</option>
            </select>
            <ChevronDown
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}
