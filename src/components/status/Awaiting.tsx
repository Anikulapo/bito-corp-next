export default function Awaiting() {
  return (
    <span
      className="
        inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium
        bg-[#EDEEFF] text-[#5258E4] dark:text-[#A7AAFF] dark:bg-[#3F3F3F]
      "
    >
      <span
        className="
          w-1.5 h-1.5 rounded-full mr-1.5 bg-blue-600
          dark:bg-blue-300
        "
      ></span>
      Awaiting Payment
    </span>
  );
}
