
export type InvoiceStatus = "awaiting" | "paid" | "overdue" | "uncollectible" | string;

export type Invoice = {
  id: string;          // Invoice number
  date: string;        // ISO string 
  client: string;
  status: InvoiceStatus;
  dueDate: string;     // ISO string
  total: number;
  amountDue: number;
};


export type TabKey = "all" | "outstanding" | "paid" | "uncollectible";

export type Tab = {
  key: TabKey | string;
  label: string;
  count: number;
};
