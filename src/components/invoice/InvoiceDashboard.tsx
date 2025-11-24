"use client";

import { useState, useEffect } from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceTabs from "./InvoiceTabs";
import InvoiceFilters from "./InvoiceFilters";
import InvoiceTable from "./InvoiceTable";
import { Invoice } from "@/state/invoice/invoiceSlice";
import InvoiceFooter from "./InvoiceFooter";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { setInvoices } from "@/state/invoice/invoiceSlice";
import { useInvoices } from "@/hooks/useInvoices";
import InvoiceSkeletonRow from "./InvoiceSkeletonRow";
import { RootState } from "@/state/store";

export default function InvoiceDashboard() {
  const [sortOption, setSortOption] = useState("Invoice#");
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const invoices = useAppSelector((state) => state.invoices.invoices);
  const itemsPerPage = useAppSelector((state) => state.invoices.itemsPerPage);
  const searchTerm = useAppSelector((state) => state.invoices.searchTerm);
  const statusFilter = useAppSelector((state) => state.invoices.statusFilter);
  const currentPage = useAppSelector((state) => state.invoices.currentPage);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useInvoices();

  useEffect(() => {
    if (data) {
      dispatch(setInvoices(data));
    }
  }, [data, dispatch]);

  const toggleInvoiceSelection = (id: string) => {
    setSelectedInvoices((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredInvoices = invoices.filter((invoice) => {
    // Status filter
    const matchesStatus =
      statusFilter === "all" ? true : invoice.status === statusFilter;

    // Search filter: check ID or client name
    const matchesSearch =
      invoice.id.includes(searchTerm) ||
      invoice.client.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  filteredInvoices.sort((a, b) => {
  switch (sortOption) {
    case "Invoice#":
      return a.id.localeCompare(b.id);
    case "Date":
      return new Date(a.issueDate).getTime() - new Date(b.issueDate).getTime();
    case "Client":
      return a.client.localeCompare(b.client);
    case "Amount":
      return a.total - b.total;
    case "Status":
      return a.status.localeCompare(b.status);
    default:
      return 0;
  }
});

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedInvoices = filteredInvoices.slice(startIndex, endIndex);

  return (
    <div className="p-6 bg-white rounded-2xl">
      <InvoiceHeader />
      <InvoiceTabs />
      <InvoiceFilters setSortOption={setSortOption} sortOption={sortOption}/>
      {isLoading ? (
        <>
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
          <InvoiceSkeletonRow />
        </>
      ) : (
        <InvoiceTable
          invoices={paginatedInvoices}
          selectedInvoices={selectedInvoices}
          toggleInvoiceSelection={toggleInvoiceSelection}
        />
      )}

      <InvoiceFooter invoice={filteredInvoices} />
    </div>
  );
}
