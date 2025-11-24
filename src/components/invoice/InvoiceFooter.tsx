"use client";

import InvoicesPerPageDropdown from "./InvoicesPerPageDropdown";
import { useAppSelector, useAppDispatch } from "@/state/hooks";
import { setCurrentPage } from "@/state/invoice/invoiceSlice";
import { Invoice } from "@/state/invoice/invoiceSlice";

interface InvoiceFooterProps {
  invoice: Invoice[];
}

const InvoiceFooter = ({invoice}:InvoiceFooterProps) => {
  const dispatch = useAppDispatch();
  const itemsPerPage = useAppSelector((state) => state.invoices.itemsPerPage);
 
  const currentPage = useAppSelector((state) => state.invoices.currentPage);


const invoiceCount = invoice.length
  const totalPages = Math.ceil(invoiceCount / itemsPerPage);

  return (
    <footer className="p-6 flex justify-between items-center">
      {/* LEFT SECTION */}
      <section className="flex gap-2 items-center font-trade font-normal text-secondary text-[12px]">
        Showing 
        <InvoicesPerPageDropdown />
        invoices per page
      </section>

      {/* RIGHT SECTION — PAGINATION */}
      <ul className="font-robo flex gap-2">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;

          return (
            <li
              key={page}
              onClick={() => dispatch(setCurrentPage(page))}
              className={`w-8 h-8 flex justify-center items-center border rounded-md cursor-pointer
                ${isActive
                  ? "bg-[#EDEEFF] border-[#686DF4] text-[#686DF4]"
                  : "bg-white border-[#AAADB1] text-black"}
              `}
            >
              {page}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default InvoiceFooter;
