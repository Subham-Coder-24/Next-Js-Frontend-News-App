import { fetchEverything } from "@/utils/Requests";
import Link from "next/link";
import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <div className="h-20  flex items-center justify-between sm:px-10 px-5 font-poppins  ">
      <div className="hidden sm:flex">
        <Search />
      </div>

      <div className="font-extrabold  sm:text-2xl text-xl tracking-wider   sm:mr-20">
        <Link href="/">.News-app</Link>
      </div>

      <div className="bg-black hidden sm:flex text-white text-center p-2 sm:p-3 w-24 sm:w-32  tracking-wider  rounded-xl text-xs cursor-pointer">
        Subscribe
      </div>
      <div className="sm:hidden">
        <Search />
      </div>
    </div>
  );
};

export default Header;
