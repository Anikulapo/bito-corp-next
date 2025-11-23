"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  MoreHorizontal,
  Plus,
  Calendar,
} from "lucide-react";

type InvoiceStatus = "awaiting" | "paid" | "overdue" | "uncollectible" | string;

type Invoice = {
  id: string;
  date: string;
  client: string;
  status: InvoiceStatus;
  dueDate: string;
  total: number;
  amountDue: number;
};

type TabKey = "all" | "outstanding" | "paid" | "uncollectible";

type Tab = {
  key: TabKey | string;
  label: string;
  count: number;
};

const InvoiceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey | string>("all");
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const invoices: Invoice[] = [
    {
      id: "00015",
      date: "10 Oct 2023",
      client: "Telekitty",
      status: "awaiting",
      dueDate: "21 Oct 2023",
      total: 2414.98,
      amountDue: 2414.98,
    },
    {
      id: "00014",
      date: "08 Oct 2023",
      client: "Fast Company",
      status: "paid",
      dueDate: "15 Oct 2023",
      total: 1747.06,
      amountDue: 0,
    },
    {
      id: "00013",
      date: "02 Oct 2023",
      client: "Off-Grid",
      status: "awaiting",
      dueDate: "30 Oct 2023",
      total: 2141.9,
      amountDue: 2141.9,
    },
    {
      id: "00012",
      date: "15 Sep 2023",
      client: "Figma",
      status: "awaiting",
      dueDate: "15 Oct 2023",
      total: 3181.21,
      amountDue: 3181.21,
    },
    {
      id: "00011",
      date: "10 Sep 2023",
      client: "Fast Company",
      status: "overdue",
      dueDate: "30 Sep 2023",
      total: 1747.06,
      amountDue: 1747.06,
    },
    {
      id: "00010",
      date: "14 Aug 2023",
      client: "Telekitty",
      status: "overdue",
      dueDate: "01 Sep 2023",
      total: 2708.39,
      amountDue: 2708.39,
    },
    {
      id: "00009",
      date: "03 Aug 2023",
      client: "Nucleo",
      status: "uncollectible",
      dueDate: "07 Aug 2023",
      total: 2414.38,
      amountDue: 0,
    },
    {
      id: "00008",
      date: "10 Jul 2023",
      client: "Telekitty",
      status: "paid",
      dueDate: "16 Jul 2023",
      total: 1395.01,
      amountDue: 0,
    },
    {
      id: "00007",
      date: "06 Jul 2023",
      client: "Fast Company",
      status: "paid",
      dueDate: "20 Jul 2023",
      total: 1464.98,
      amountDue: 0,
    },
    {
      id: "00006",
      date: "05 Jul 2023",
      client: "Off-Grid",
      status: "paid",
      dueDate: "14 Jul 2023",
      total: 1101.68,
      amountDue: 0,
    },
  ];

  const tabs: Tab[] = [
    { key: "all", label: "All", count: 40 },
    { key: "outstanding", label: "Outstanding", count: 5 },
    { key: "paid", label: "Paid", count: 33 },
    { key: "uncollectible", label: "Uncollectible", count: 2 },
  ];

  const getStatusColor = (status: InvoiceStatus): string => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-700";
      case "awaiting":
        return "bg-blue-100 text-blue-700";
      case "overdue":
        return "bg-red-100 text-red-700";
      case "uncollectible":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusLabel = (status: InvoiceStatus): string => {
    switch (status) {
      case "awaiting":
        return "Awaiting Payment";
      case "paid":
        return "Paid";
      case "overdue":
        return "Overdue";
      case "uncollectible":
        return "Uncollectible";
      default:
        return status;
    }
  };

  const toggleInvoiceSelection = (id: string): void => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className=" bg-white p-6 rounded-2xl">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <button className="text-2xl font-semibold text-gray-900 border-b-2 border-blue-600 pb-1">
                Invoices
              </button>
              <button className="text-2xl font-semibold text-gray-400 pb-1">
                Draft
              </button>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-[#5258E4] rounded-full text-white px-5 font-robo py-3 hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            New Invoice
          </button>
        </div>

        {/* Tabs */}
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

           <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Try invoice# or client name"
                className="pl-10 pr-4 py-2  focus:outline-none w-64"
              />
            </div>
        </div>
       

        {/* Filters and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <div className="relative min-w-[200px]">
              <select className="appearance-none min-w-[200px] bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All clients</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <select className="appearance-none min-w-[200px] bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Status</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>

            <div className="relative">
              <button className="flex items-center min-w-[200px] justify-between bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:border-gray-400">
                All Time
                <Calendar size={18} />
              </button>
            </div>
          </div>

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

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className=" border-b">
              <tr>
                <th className="w-12 px-6 py-3"></th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  <div className="flex items-center gap-1">
                    Invoice# <ChevronDown size={16} />
                  </div>
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Invoice Date
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Client
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Status
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-700">
                  Due Date
                </th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-700">
                  Total
                </th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-700">
                  Amount Due
                </th>
                <th className="w-12 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedInvoices.includes(invoice.id)}
                      onChange={() => toggleInvoiceSelection(invoice.id)}
                      className="w-4 h-4 rounded border-gray-300 focus:ring-blue-500 accent-[#0265DC]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[#0265DC] font-medium hover:underline cursor-pointer">
                      {invoice.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{invoice.date}</td>
                  <td className="px-6 py-4 text-gray-700">{invoice.client}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        invoice.status
                      )}`}
                    >
                      {invoice.status === "awaiting" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-1.5"></span>
                      )}
                      {invoice.status === "overdue" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 mr-1.5"></span>
                      )}
                      {invoice.status === "paid" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1.5"></span>
                      )}
                      {invoice.status === "uncollectible" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-1.5"></span>
                      )}
                      {getStatusLabel(invoice.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{invoice.dueDate}</td>
                  <td className="px-6 py-4 text-right text-gray-700">
                    $
                    {invoice.total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4 text-right text-gray-700">
                    $
                    {invoice.amountDue.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}

        </div>
      </div>
    </div>
  );
};

export default InvoiceDashboard;
