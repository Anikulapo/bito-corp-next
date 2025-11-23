"use client"

import { ChevronDown } from "lucide-react"
import { Bell } from "lucide-react"
import { usePathname } from "next/navigation";

import Image from "next/image"

const Header = () => {
    const pathname = usePathname()
    const navItems = ['Invoices', 'Clients', 'Service Items'];
  return (
    <nav className="px-[2%] bg-white w-full flex justify-between max-h-[64px]">
        <div className="flex gap-10 items-center">
            <Image
              src="/images/PayZen.svg"
              alt="PayZen Logo"
              width={99}
              height={33}
              className=""
            />

           <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  
                  className="relative px-4 py-5 text-sm font-medium transition-colors duration-300 group text-[16px] cursor-pointer"
                >
                  <span className={`${
                    pathname === `/${item.toLowerCase()}` 
                      ? 'text-[#5258E4]' 
                      : 'text-primary group-hover:text-[#5258E4]'
                  }`}>
                    {item}
                  </span>
                  
                  {/* Active indicator bar */}
                  <div className={`absolute w-[70%] left-[50%] translate-x-[-50%] bottom-0 h-0.5 transition-colors ${
                    pathname === `/${item.toLowerCase()}` 
                      ? 'bg-blue-600' 
                      : 'bg-transparent group-hover:bg-gray-300'
                  }`} />
                </button>
              ))}
            </nav>
        </div>
        <div className="flex items-center gap-4">
            <button className="cursor-pointer p-2">
                <Image
                  src="/images/bell.svg"
                  alt="Notification"
                  width={16}
                  height={19.5}
                  className=""/>
            </button>
            
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <Image
              src="/images/Avatar.svg"
              alt="Profile Pic"
              width={40}
              height={40}
              className=""
            />
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
    </nav>
  )
}

export default Header