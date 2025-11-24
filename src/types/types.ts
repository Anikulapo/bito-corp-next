
export type InvoiceStatus = "awaiting" | "paid" | "overdue" | "uncollectable" | string;

export type Invoice = {
  id: string;          // Invoice number
  issueDate: string;        // ISO string 
  client: string;
  status: InvoiceStatus;
  dueDate: string;     // ISO string
  total: number;
  amountDue: number;
};


export type TabKey = "all" | "outstanding" | "paid" | "uncollectable";

export type Tab = {
  key: TabKey | string;
  label: string;
  count: number;
};
