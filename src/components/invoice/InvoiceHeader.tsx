"use client";

import { Plus } from "lucide-react";
import Image from "next/image";

export default function InvoiceHeader() {
  return (
    <div className="flex items-center justify-between mb-8 ">
      <div className="flex items-center gap-6">
        <div className="flex gap-4 items-center">
          <button className="text-2xl font-semibold font-tt tracking-[-1px] relative text-black  pb-1 cursor-pointer">
            Invoices
            <Image
                      src="/images/highlight.svg"
                      alt="PayZen Logo"
                      width={99}
                      height={33}
                      className="absolute"
                    />
          </button>
          <button className="text-2xl font-semibold font-tt tracking-[-1px] text-secondary pb-1 cursor-pointer hover:text-black group">
            Draft
            <Image
                      src="/images/highlight.svg"
                      alt="PayZen Logo"
                      width={50}
                      height={33}
                      className="absolute  group-hover:opacity-100 group-hover:w-[55px] opacity-0 w-0 transition-all duration-700"
                    />
          </button>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-[#5258E4] text-[16px] rounded-full font-robo font-bold text-white px-5 py-3 hover:bg-blue-700 transition-colors">
        <Plus size={20} />
        New Invoice
      </button>
    </div>
  );
}
