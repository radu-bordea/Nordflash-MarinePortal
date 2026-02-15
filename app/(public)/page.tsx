"use client";

import Link from "next/link";
import { homeLinks } from "@/lib/links";
import { ArrowUp, ArrowDown, Bell } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="w-full max-w-6xl h-full mx-auto px-4 py-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-md md:text-2xl font-semibold tracking-tight">
            <span className="text-primary font-semibold">Mobile Marine</span>{" "}
            <span className="text-muted-foreground font-medium">
              QHSEE Management Portal
            </span>
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground tracking-wide">
            QUALITY · HEALTH · SAFETY · ENERGY · ENVIRONMENT
          </p>
        </div>

        <div>
          <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 shadow-sm transition-all">
            <Bell className="h-4 w-4" />
            Emergency Contacts
            <ArrowDown size={18} className="text-white/90" />
          </Button>
        </div>
      </div>

      {/* KPI Bar */}
      <div
        className="max-w-md mx-auto py-1 px-3 my-4 
        bg-gradient-to-r from-neutral-100 to-neutral-50 
        dark:from-slate-700 dark:to-slate-800
        text-neutral-600 dark:text-neutral-400
        rounded-sm flex justify-between items-center 
        text-xs md:text-sm shadow-sm"
      >
        <span className="font-medium">TRIR: 0.00</span>
        <span className="font-medium">LTIF: 0.00</span>
        <span className="font-medium">NM/UA: 0</span>
        <ArrowUp size={18} className="text-emerald-500" />
      </div>

      {/* Grid Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {homeLinks.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "group rounded-xl border bg-card/80 backdrop-blur p-6",
                "flex items-center gap-4 transition-all duration-200",
                "hover:shadow-xl hover:-translate-y-1 hover:bg-accent/40",
                "active:scale-[0.98]"
              )}
            >
              {Icon && (
                <div
                  className="flex h-12 w-12 items-center justify-center 
                  rounded-lg bg-primary/10 text-primary 
                  transition-all duration-200
                  group-hover:bg-gray-500 group-hover:text-gray-300"
                >
                  <Icon className="h-6 w-6" />
                </div>
              )}

              <div>
                <div className="font-medium tracking-tight group-hover:underline">
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
      <div
        className="flex flex-col md:flex-row max-w-4xl py-2 px-2 mt-8 text-center mx-auto 
        bg-gradient-to-r from-neutral-100 to-neutral-50
        dark:from-slate-700 dark:to-slate-800
        text-neutral-600 dark:text-neutral-400
        rounded-sm justify-center items-center gap-2 
        text-xs md:text-sm shadow-sm"
      >
        <span className="font-medium tracking-wide">ZERO INCIDENTS</span>
        <span className="hidden md:block text-muted-foreground">|</span>
        <span className="font-medium tracking-wide">
          OPERATIONAL EXCELLENCE
        </span>
        <span className="hidden md:block text-muted-foreground">|</span>
        <span className="font-medium tracking-wide">
          ENVIRONMENTAL COMPLIANCE
        </span>
      </div>

      {/* MISSION / VISION FIXED */}
      <div
        className="max-w-4xl border-y mx-auto py-6 px-4 mt-8 
        rounded-xl flex flex-col md:flex-row 
        justify-between items-center md:items-start
        text-center  gap-6 md:gap-8"
      >
        {/* Mission */}
        <div className="flex-1">
          <h2 className="font-semibold text-lg md:text-xl tracking-wide hover:text-primary transition">
            MISSION
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To deliver safe, efficient and compliant marine operations beyond
            industry standards.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:flex h-30 items-center text-muted-foreground">
          |
        </div>

        {/* Vision */}
        <div className="flex-1">
          <h2 className="font-semibold text-lg md:text-xl tracking-wide hover:text-primary transition">
            VISION
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            To achieve sustainable maritime excellence through continuous
            improvement and professional leadership.
          </p>
        </div>
      </div>

      <h1 className="text-center text-sm md:text-md text-muted-foreground mt-8 tracking-wide">
        MOBILE MARINE INTL
      </h1>
    </section>
  );
}
