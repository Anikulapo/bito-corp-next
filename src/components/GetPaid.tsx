"use client";
import { useSelector } from "react-redux";
import {
  selectTotalPaid,
  selectTotalUncollectible,
} from "@/state/invoice/invoiceSelectors";  

const GetPaid = () => {
  const totalPaid = useSelector(selectTotalPaid);
const totalUncollectible = useSelector(selectTotalUncollectible);
  return (
    <main className="p-6 bg-white flex gap-10 rounded-2xl w-[50%] ">
      <section className="flex flex-col gap-3 w-full">
        <p className="font-robo font-bold text-[16px] text-secondary">
          Get paid
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[36px] font-tt flex justify-end">${totalPaid}</p>
          <p className="text-primary text-[16px] pb-2">USD</p>
        </div>
      </section>
      <section className="flex flex-col gap-3  w-full">
        <p className="font-robo font-bold text-[16px] text-secondary">
          Uncollectable
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[36px] font-tt flex justify-end">${totalUncollectible} </p>
          <p className="text-primary text-[16px] pb-2">USD</p>
        </div>
      </section>
      <button className="flex  w-full  gap-2">
        <p className="text-primary text-[16px] pb-2">Last Month</p>
        <svg
          className="w-4 h-4 mt-1 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </main>
  );
};

export default GetPaid;
