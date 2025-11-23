import { createSlice } from "@reduxjs/toolkit";

export type InvoiceStatus = 
  | "awaiting" 
  | "overdue" 
  | "paid" 
  | "uncollectable";

export type Invoice = {
  id: string;
  client: string;
  issueDate: string;  // ISO format only
  dueDate: string;    // ISO format only
  total: number;
  amountDue: number;
  status: InvoiceStatus;
};

type InvoicesState = {
  data: Invoice[];
};

const initialState: InvoicesState = {
  data: [],
};

// TEMP slice (empty for now)
const invoiceSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
});

export default invoiceSlice.reducer;
