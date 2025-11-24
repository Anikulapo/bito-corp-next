# Invoice Dashboard

A modern, full-featured invoice management dashboard built with Next.js, Redux Toolkit, and React Query.

## 📋 Project Overview

This **Invoice Management Dashboard** provides users with a clear, interactive interface to manage invoices efficiently. The application supports comprehensive filtering, searching, sorting, and pagination capabilities, with an emphasis on responsive design and maintainable state management.

## ✨ Key Features

- **Invoice Listing** - Paginated table displaying all invoices
- **Advanced Filtering** - Filter by status (Paid, Awaiting, Overdue, Uncollectible) and date range
- **Smart Search** - Search by Invoice ID or Client Name
- **Flexible Sorting** - Sort by Invoice#, Date, Client, Amount, or Status
- **Customizable Pagination** - Configurable items per page with intuitive navigation
- **Real-time Totals** - Automatic calculation of amounts for each status category
- **Loading States** - Skeleton screens for better user experience
- **File Upload** - Drag-and-drop company logo with live preview
- **Global State Management** - Centralized state with Redux Toolkit

## 🛠 Technology Stack

### Core Technologies

- **[Next.js](https://nextjs.org/)** (React 18, App Router)
  - Server-Side Rendering (SSR) and Static Site Generation (SSG)
  - Modern React patterns with hooks
  - Optimal performance and SEO

- **[Redux Toolkit](https://redux-toolkit.js.org/)**
  - Centralized global state management
  - Custom hooks (`useAppDispatch`, `useAppSelector`)
  - Predictable state transitions for complex UI logic

- **[React Query](https://tanstack.com/query/latest)** (TanStack Query)
  - Efficient data fetching with automatic caching
  - Built-in loading and error states
  - Background revalidation

- **[Tailwind CSS](https://tailwindcss.com/)**
  - Utility-first styling approach
  - Responsive design out of the box
  - Minimal CSS footprint

- **[Lucide React](https://lucide.dev/)**
  - Lightweight, accessible SVG icons

- **TypeScript**
  - Full type safety across components and state

## 📁 Project Structure

```
/src
 ├─ /components
 │   ├─ InvoiceHeader.tsx
 │   ├─ InvoiceTabs.tsx
 │   ├─ InvoiceFilters.tsx
 │   ├─ InvoiceTable.tsx
 │   ├─ InvoiceFooter.tsx
 │   ├─ SortDropdown.tsx
 │   ├─ StatusDropdown.tsx
 │   ├─ InvoicesPerPageDropdown.tsx
 │   └─ InvoiceSkeletonRow.tsx
 ├─ /hooks
 │   └─ useInvoices.ts
 ├─ /state
 │   ├─ /invoice
 │   │   ├─ invoiceSlice.ts
 │   │   └─ invoiceSelectors.ts
 │   └─ hooks.ts
 └─ /types
     └─ types.ts
```

## 🔄 State Management

### Invoice Slice

**State Shape:**

```typescript
interface InvoiceState {
  invoices: Invoice[];
  searchTerm: string;
  statusFilter: "all" | InvoiceStatus;
  dateRange: "all" | "3m" | "6m" | "1y";
  itemsPerPage: number;
  currentPage: number;
}
```

**Available Actions:**

- `setInvoices` - Updates invoice list
- `setSearchTerm` - Updates search and resets pagination
- `setStatusFilter` - Updates status filter and resets pagination
- `setDateRange` - Updates date filter and resets pagination
- `setItemsPerPage` - Updates items per page
- `setCurrentPage` - Navigates between pages

**Selectors:**

- `selectInvoices` - All invoices
- `selectPaidInvoices`, `selectAwaitingInvoices`, `selectOverdueInvoices`, `selectUncollectibleInvoices`
- `selectTotalPaid`, `selectTotalAwaiting`, `selectTotalOverdue`, `selectTotalUncollectible`

### Why Redux?

Redux Toolkit was chosen for this project to:
- Eliminate prop drilling across deeply nested components
- Provide predictable state transitions for complex filtering logic
- Enable easy debugging and time-travel development
- Centralize business logic in one maintainable location

## 🔍 Filtering, Sorting & Pagination

All data manipulation is handled in the Dashboard component:

```typescript
const filteredInvoices = invoices
  .filter(invoice => 
    (statusFilter === "all" || invoice.status === statusFilter) &&
    (invoice.id.includes(searchTerm) || 
     invoice.client.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  .sort((a, b) => {
    switch (sortOption) {
      case "Invoice#": return a.id.localeCompare(b.id);
      case "Date": return new Date(a.date).getTime() - new Date(b.date).getTime();
      case "Client": return a.client.localeCompare(b.client);
      case "Amount": return a.total - b.total;
      case "Status": return a.status.localeCompare(b.status);
      default: return 0;
    }
  });

const paginatedInvoices = filteredInvoices.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);
```

## 🎨 UI/UX Design Decisions

- **Custom Dropdowns** - Prevents Next.js hydration errors while maintaining accessibility
- **Loading Skeletons** - Provides visual feedback during data fetching
- **Responsive Layout** - Mobile-first design with Tailwind breakpoints
- **Drag-and-Drop Upload** - Intuitive file handling with instant preview
- **Clean Typography** - Clear visual hierarchy and readable content

## 🏗 Architecture Benefits

1. **Separation of Concerns** - Components focus on presentation; logic lives in Redux
2. **Scalability** - Easy to add new filters, sorts, or totals
3. **Type Safety** - TypeScript catches errors at compile time
4. **Performance** - React Query caching and efficient re-renders
5. **Maintainability** - Modular structure makes updates straightforward
6. **Developer Experience** - Clear patterns and conventions throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd invoice-dashboard

# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🔮 Future Enhancements

- [ ] Backend API integration for real invoice data
- [ ] Real-time invoice status updates via WebSockets
- [ ] User authentication and role-based access control
- [ ] Server-side pagination for large datasets
- [ ] Export functionality (PDF, CSV)
- [ ] Enhanced accessibility (WCAG 2.1 AA compliance)
- [ ] Dark mode support
- [ ] Advanced reporting and analytics
- [ ] Email notifications for invoice updates
- [ ] Multi-currency support

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and Redux Toolkit
