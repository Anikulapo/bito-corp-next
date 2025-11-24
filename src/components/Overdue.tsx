"use client";

import { useSelector } from "react-redux";
import {
  selectTotalAwaiting,
  selectTotalOverdue,
} from "@/state/invoice/invoiceSelectors";


const Overdue = () => {
  const totalAwaiting = useSelector(selectTotalAwaiting);
const totalOverdue = useSelector(selectTotalOverdue);
  return (
    <main className="p-6 bg-white flex gap-10 rounded-2xl w-[50%]">
      <section className="flex flex-col gap-3 w-full">
        <p className="font-robo font-bold text-[16px] text-secondary">
          Overdue
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[36px] font-tt flex justify-end">${totalOverdue} </p>
          <p className="text-primary text-[16px] pb-2">USD</p>
        </div>
      </section>
      <section className="flex flex-col gap-3 w-full">
        <p className="font-robo font-bold text-[16px] text-secondary">
          Total outstanding
        </p>
        <div className="flex items-end gap-2">
          <p className="text-[36px] font-tt flex justify-end">${totalAwaiting}</p>
          <p className="text-primary text-[16px] pb-2">USD</p>
        </div>
      </section>
    </main>
  );
};

export default Overdue;
