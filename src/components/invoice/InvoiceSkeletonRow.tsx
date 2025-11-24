import Skeleton from "../Skeleton";

export default function InvoiceSkeletonRow() {
  return (
    <div className="grid grid-cols-7 gap-4 py-3 items-center border-b border-[#E1E3E6]">
      <Skeleton className="h-4 w-6" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-4 w-6" />
    </div>
  );
}
