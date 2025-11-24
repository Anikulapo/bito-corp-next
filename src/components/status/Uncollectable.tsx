export default function Uncollectible() {
  return (
    <span
      className="
        inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
         bg-[#E1E3E6] text-secondary dark:text-[#D1D1D1] dark:bg-[#3F3F3F]
      "
    >
      <span
        className="
          w-1.5 h-1.5 rounded-full mr-1.5 bg-gray-600
          dark:bg-gray-300
        "
      ></span>
      Uncollectible
    </span>
  );
}
