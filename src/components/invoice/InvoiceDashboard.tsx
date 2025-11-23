"use client";

import { useState } from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceTabs from "./InvoiceTabs";
import InvoiceFilters from "./InvoiceFilters";
import InvoiceTable from "./InvoiceTable";
import { Invoice } from "@/types/types";

const tabs = [
  { key: "all", label: "All", count: 40 },
  { key: "outstanding", label: "Outstanding", count: 5 },
  { key: "paid", label: "Paid", count: 33 },
  { key: "uncollectible", label: "Uncollectible", count: 2 },
];

// Replace this with mock data or Redux state later
const invoices: Invoice[] = [
  { id: "00015", date: "10 Oct 2023", client: "Telekitty", status: "awaiting", dueDate: "21 Oct 2023", total: 2414.98, amountDue: 2414.98 },
  { id: "00014", date: "08 Oct 2023", client: "Fast Company", status: "paid", dueDate: "15 Oct 2023", total: 1747.06, amountDue: 0 },
  { id: "00013", date: "02 Oct 2023", client: "Off-Grid", status: "awaiting", dueDate: "30 Oct 2023", total: 2141.9, amountDue: 2141.9 },
];

export default function InvoiceDashboard() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);

  const toggleInvoiceSelection = (id: string) => {
    setSelectedInvoices(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredInvoices = invoices; // TODO: filter by activeTab

  return (
    <div className="p-6 bg-white rounded-2xl">
      <InvoiceHeader />
      <InvoiceTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <InvoiceFilters />
      <InvoiceTable
        invoices={filteredInvoices}
        selectedInvoices={selectedInvoices}
        toggleInvoiceSelection={toggleInvoiceSelection}
      />
    </div>
  );
}
