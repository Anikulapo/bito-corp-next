"use client";

import { Search } from "lucide-react";
import { useState } from "react";

type Tab = {
  key: string;
  label: string;
  count: number;
};

type Props = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (key: string) => void;
};

export default function InvoiceTabs({ tabs, activeTab, setActiveTab }: Props) {
      const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="flex gap-6 mb-6 justify-between border-b border-[#E1E3E6]">
      <div className="flex gap-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 font-medium transition-colors ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label} ({tab.count})
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Try invoice# or client name"
          className="pl-10 pr-4 py-2 focus:outline-0 font-trade w-64"
        />
      </div>
    </div>
  );
}
