"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { nav } from "@/data";

const Navbar = () => {
  return (
    <nav className="h-[14vh] bg-pink-100/50 flex items-center justify-between px-4 overflow-hidden border-b md:px-20 lg:px-5 ">
      <Image
        height={1000}
        width={1000}
        alt="logo"
        src={"/nav/nav-logo.png"}
        className="h-[7vh] w-auto"
        loading="eager"
      />

      {/* dexstop view only  */}
      <div className="lg:flex flex-wrap items-center text-2xl gap-6 bg-white p-5 rounded-xl justify-center hidden">
        {nav.map((item, idx) => (
          <Link href={item?.link} key={idx} className="flex gap-2">
            <span className="text-blue-500">•</span>{" "}
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      <Link
        href={"/"}
        className="text-red-500 text-2xl bg-white px-4 py-2 xl:py-2 lg:px-2 lg:py-1 border border-red-500 uppercase animate-pulse rounded hidden lg:flex"
      >
        Shop Online
      </Link>

      <a href="https://wa.link/rt47ko" target="_blank">
        <Image
          height={1000}
          width={1000}
          alt="whatsapp"
          src={"/nav/whatspp.png"}
          className="h-[7vh] w-auto lg:hidden "
        />
      </a>

      <button className="bg-red-700 hover:bg-red-800 hidden lg:flex text-white px-5 py-1 rounded-lg font-teko md:text-lg lg:rounded xl:text-2xl xl:py-2 xl:px-5 lg:font-bold   lg:px-2 lg:py-2">
        Get a Quote
      </button>
      
      <a href="https://wa.link/rt47ko" target="_blank">
        <Image
          height={1000}
          width={1000}
          alt="whatsapp"
          src={"/nav/whatspp.png"}
          className="h-[7vh] w-auto hidden lg:flex lg:h-[6h] lg:w-auto "
        />
      </a>

      <Sheet>
        <SheetTrigger asChild>
          <Menu className="lg:hidden" />
        </SheetTrigger>
        <SheetContent className={"bg-white"}>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>This action cannot be undone.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
