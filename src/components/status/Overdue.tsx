export default function Overdue() {
  return (
    <span
      className="
        inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
         bg-[#FFEBE7] text-[#D31510] dark:text-[#FF9581] dark:bg-[#3F3F3F]
      "
    >
      <span
        className="
          w-1.5 h-1.5 rounded-full mr-1.5 bg-red-600
          dark:bg-red-300
        "
      ></span>
      Overdue
    </span>
  );
}
