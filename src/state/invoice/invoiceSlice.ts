import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InvoiceStatus = "awaiting" | "paid" | "overdue" | "uncollectable";

export interface Invoice {
  id: string;
  issueDate: string; // ISO date string
  client: string;
  status: InvoiceStatus;
  dueDate: string;
  total: number;
  amountDue: number;
}

export interface InvoiceState {
  invoices: Invoice[];

  searchTerm: string;
  statusFilter: "all" | InvoiceStatus;
  dateRange: "all" | "3m" | "6m" | "1y";

  itemsPerPage: number;
  currentPage: number;
}

const initialState: InvoiceState = {
  invoices: [],
  searchTerm: "",
  statusFilter: "all",
  dateRange: "all",
  itemsPerPage: 10,
  currentPage: 1,
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    // Set invoices from React Query or mock data
    setInvoices(state, action: PayloadAction<Invoice[]>) {
      state.invoices = action.payload;
    },

    // Search text
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.currentPage = 1; // reset pagination on search
    },

    // Status filter: all / paid / awaiting / etc.
    setStatusFilter(state, action: PayloadAction<"all" | InvoiceStatus>) {
      state.statusFilter = action.payload;
      state.currentPage = 1;
    },

    // Date filter: all time / last 3 months / etc.
    setDateRange(state, action: PayloadAction<"all" | "3m" | "6m" | "1y">) {
      state.dateRange = action.payload;
      state.currentPage = 1;
    },

    // Example: 10 / 20 / 50 items per page
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.itemsPerPage = action.payload;
      state.currentPage = 1;
    },

    // Move between pages
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setInvoices,
  setSearchTerm,
  setStatusFilter,
  setDateRange,
  setItemsPerPage,
  setCurrentPage,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
