import { useQuery } from "@tanstack/react-query";
import { Invoice } from "@/state/invoice/invoiceSlice";


const fetchInvoices = async (): Promise<Invoice[]> => {
  const res = await fetch("/data/invoices.json");
  if (!res.ok) throw new Error("Failed to fetch invoices");
  return res.json();
};

export const useInvoices = () => {
  return useQuery<Invoice[], Error>({
    queryKey: ["invoices"],
    queryFn: fetchInvoices,
    staleTime: 1000 * 60 * 5,
  });
};
