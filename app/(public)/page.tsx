// app/(home)/page.tsx
"use client";

import Link from "next/link";
import { homeLinks } from "@/lib/links";
import { ArrowUp, ArrowDown, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        {/* Header */}
        <div className=" text-center mb-2">
          <h1 className="text-2xl font-semibold">
            <span className="text-neutral-400">Mobile Marine</span>{" "}
            <span className="text-xl text-neutral-500">
              QHSEE Management Portal
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">
            QUALITY - HEALTH - SAFETY - ENERGY ENVIRONMENT
          </p>
        </div>

        {/* Top Bar */}
        <div className="flex items-center justify-end mb-2">
          <Button className="bg-red-400 hover:bg-red-500 text-white flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Emergency Contacts
            <ArrowDown size={20} className="text-black" />
          </Button>
        </div>
      </div>

      {/* KPI Bar */}
      <div className="max-w-md mx-auto py-2 px-3 my-8 dark:bg-slate-700 dark:text-neutral-400 bg-neutral-100 text-neutral-500 rounded-sm flex justify-between items-center text-sm md:text-lg">
        <span>TRIR: 0.00</span>
        <span>LTIF: 0.00</span>
        <span>NM/UA: 0</span>
        <ArrowUp size={20} className="text-black" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "group rounded-xl border bg-card/80 backdrop-blur p-6",
                "flex items-center gap-4 transition-all",
                "hover:shadow-lg hover:-translate-y-1 hover:bg-accent/40",
                "active:scale-[0.98]",
              )}
            >
              {Icon && (
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              )}

              <div>
                <div className="font-medium group-hover:underline">
                  {link.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {link.href === "/portal/manuals-procedures" && (
                    <span>(Policies & operational manuals)</span>
                  )}
                  {link.href === "/portal/crewing" && (
                    <span>(Crew charges)</span>
                  )}
                  {link.href === "/portal/incident-investigation" && (
                    <span>(Near Misses, Unsafe Acts, Incidents)</span>
                  )}
                  {link.href === "/portal/risk-assessment" && (
                    <span>(Job Hazard Analysis)</span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer Highlights */}
      <div className="flex flex-col md:flex-row max-w-4xl py-2 px-2 my-6 text-center mx-auto dark:bg-slate-700 dark:text-neutral-400 bg-neutral-100 text-neutral-500 rounded-sm justify-between items-center gap-2">
        <span>ZERO INCIDENTS</span>
        <span className="hidden md:block">|</span>
        <span>OPERATIONAL EXCELLENCE</span>
        <span className="hidden md:block">|</span>
        <span>ENVIRONMENTAL COMPLIANCE</span>
      </div>

      <div className="max-w-4xl border-y-2 text-center mx-auto py-6 px-2 my-8 rounded-xl flex justify-around items-center text-md md:text-lg">
        <span>MISSION</span> | <span>VISION</span>
      </div>

      <h1 className="text-center text-md md:text-lg text-muted-foreground">
        MOBILE MARINE INTL
      </h1>
    </section>
  );
}
