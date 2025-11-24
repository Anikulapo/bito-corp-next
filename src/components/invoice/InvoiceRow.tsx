"use client";

import { MoreHorizontal } from "lucide-react";
import PaidStatus from "@/components/status/Paid";
import AwaitingStatus from "@/components/status/Awaiting";
import OverdueStatus from "@/components/status/Overdue";
import UncollectibleStatus from "@/components/status/Uncollectable";

type InvoiceStatus = "awaiting" | "paid" | "overdue" | "uncollectible" | string;

type Invoice = {
  id: string;
  issueDate: string;
  client: string;
  status: InvoiceStatus;
  dueDate: string;
  total: number;
  amountDue: number;
};

type Props = {
  invoice: Invoice;
  selected: boolean;
  toggleSelection: (id: string) => void;
};

export default function InvoiceRow({
  invoice,
  selected,
  toggleSelection,
}: Props) {
  return (
    <tr className="border-[#E1E3E6] dark:border-[#3F3F3F]">
      <td className="px-6 py-4">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggleSelection(invoice.id)}
          className="w-4 h-4 rounded border-[#E1E3E6] focus:ring-blue-500 accent-[#0265DC]"
        />
      </td>
      <td className="px-6 py-4 text-[#0265DC] font-medium hover:underline cursor-pointer">
        {invoice.id}
      </td>
      <td className="px-6 py-4 text-secondary">{invoice.issueDate}</td>
      <td className="px-6 py-4 text-secondary">{invoice.client}</td>
      <td className="px-6 py-4">
        {invoice.status === "paid" && <PaidStatus />}
        {invoice.status === "awaiting" && <AwaitingStatus />}
        {invoice.status === "overdue" && <OverdueStatus />}
        {invoice.status === "uncollectable" && <UncollectibleStatus />}
      </td>
      <td className="px-6 py-4 text-secondary">{invoice.dueDate}</td>
      <td className="px-6 py-4 text-right text-secondary">
        $
        {invoice.total.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </td>
      <td className="px-6 py-4 text-right text-secondary">
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
  );
}
