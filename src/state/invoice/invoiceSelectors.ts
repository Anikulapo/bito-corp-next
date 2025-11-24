import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Base selector
export const selectInvoices = (state: RootState) => state.invoices.invoices;

// Helper: Filter by status
const filterByStatus = (status: string) =>
  createSelector([selectInvoices], (invoices) =>
    invoices.filter((inv) => inv.status === status)
  );

// Selectors for each status
export const selectPaidInvoices = filterByStatus("paid");
export const selectAwaitingInvoices = filterByStatus("awaiting");
export const selectOverdueInvoices = filterByStatus("overdue");
export const selectUncollectibleInvoices = filterByStatus("uncollectable");

// Total amounts
export const selectTotalPaid = createSelector(
  [selectPaidInvoices],
  (invoices) => invoices.reduce((sum, inv) => sum + inv.total, 0)
);

export const selectTotalAwaiting = createSelector(
  [selectAwaitingInvoices],
  (invoices) => invoices.reduce((sum, inv) => sum + inv.amountDue, 0)
);

export const selectTotalOverdue = createSelector(
  [selectOverdueInvoices],
  (invoices) => invoices.reduce((sum, inv) => sum + inv.amountDue, 0)
);

export const selectTotalUncollectible = createSelector(
  [selectUncollectibleInvoices],
  (invoices) => invoices.reduce((sum, inv) => sum + inv.amountDue, 0)
);
