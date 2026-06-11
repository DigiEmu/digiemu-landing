"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ data }: { data: any }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-7xl rounded-3xl bg-white/60 px-5 py-4 shadow-[8px_8px_24px_#cfd6df,-8px_-8px_24px_#ffffff]">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl">
            <Image
              src="/logo-light.webp"
              alt="DigiEmu Logo"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-semibold">{data.site.name}</p>
            <p className="text-xs text-slate-500">{data.site.tagline}</p>
          </div>
        </Link>

        <div className="hidden gap-8 text-sm text-slate-600 md:flex">
          {data.navigation.map((item: any) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-2xl bg-[#eef2f6] text-slate-900 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mt-5 grid gap-3 md:hidden">
          {data.navigation.map((item: any) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-[#eef2f6] px-4 py-3 text-sm font-medium text-slate-700 shadow-[inset_5px_5px_12px_#d0d7e0,inset_-5px_-5px_12px_#ffffff]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
