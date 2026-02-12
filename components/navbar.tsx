"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Manuals", href: "/manuals" },
  { name: "Rules", href: "/rules" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
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
              <nav className="flex flex-col gap-4 mt-2 ml-4">
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="text-lg">
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="font-bold text-xl tracking-wide">
            Marine Portal
          </Link>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm hover:text-primary">
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
  )
}
