"use client";

import InvoiceRow from "./InvoiceRow";
import { Invoice } from "@/types/types";

type Props = {
  invoices: Invoice[];
  selectedInvoices: string[];
  toggleInvoiceSelection: (id: string) => void;
};

export default function InvoiceTable({ invoices, selectedInvoices, toggleInvoiceSelection }: Props) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="border-b border-[#E1E3E6] dark:border-[#3F3F3F]">
          <tr>
            <th className="w-12 px-6 py-3"></th>
            <th className="text-left px-6 py-3 text-sm font-medium text-secondary">Invoice#</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-secondary">Invoice Date</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-secondary">Client</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-secondary">Status</th>
            <th className="text-left px-6 py-3 text-sm font-medium text-secondary">Due Date</th>
            <th className="text-right px-6 py-3 text-sm font-medium text-secondary">Total</th>
            <th className="text-right px-6 py-3 text-sm font-medium text-secondary">Amount Due</th>
            <th className="w-12 px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {invoices.map(invoice => (
            <InvoiceRow
              key={invoice.id}
              invoice={invoice}
              selected={selectedInvoices.includes(invoice.id)}
              toggleSelection={toggleInvoiceSelection}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
