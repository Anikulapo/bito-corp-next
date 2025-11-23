import { configureStore } from '@reduxjs/toolkit';
import themeReducer from "@/state/features/themeSlice"
import invoiceReducer from "@/state/invoice/invoiceSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    invoices: invoiceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
