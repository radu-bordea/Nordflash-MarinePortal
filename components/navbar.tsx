"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { navLinks, portalLinks } from "@/lib/links";

import Image from "next/image";

export function Navbar() {
  return (
    <header className="border-b bg-background/90">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle className="m-4">Menu</SheetTitle>

              {/* Public / Navbar Links */}
              <nav className="flex flex-col gap-2 mt-2 ml-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className=" mx-4 h-px bg-border" />

              {/* Portal Links */}
              <nav className="flex flex-col gap-3 ml-4">
                {portalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link
            href="/"
            className="font-bold text-sm tracking-wide flex flex-row gap-4 text-gray-400"
          >
            <Image
              src="/mobilemarine.jpg"
              alt="Global Marine Logo"
              width={48}
              height={48}
              className="object-contain rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-xl text-neutral-400">Global Marine</span>{" "}
              QHSEE Management Portal
            </div>
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
