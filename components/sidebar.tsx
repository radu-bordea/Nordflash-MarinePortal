// components/sidebar.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Input } from "./ui/input"
import {
  FileText,
  BookOpen,
  Anchor,
  Settings,
  AlertTriangle,
  ClipboardList,
  Flag,
  Layers,
  Search,
  Activity,
  Award,
} from "lucide-react"

import { portalLinks } from "@/lib/links"

export function Sidebar() {
  const [query, setQuery] = useState("")

  const filteredLinks = portalLinks.filter((link) =>
    link.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <aside className="hidden md:flex md:flex-col w-64 border-r bg-muted/40 h-[calc(100vh-4rem)] p-4 gap-4">
      
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Links */}
      <nav className="flex flex-col gap-1 overflow-y-auto">
        {filteredLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-muted transition"
          >
            <link.icon className="h-4 w-4" />
            {link.name}
          </Link>
        ))}

        {filteredLinks.length === 0 && (
          <p className="text-xs text-muted-foreground px-3 py-2">
            No results found
          </p>
        )}
      </nav>
    </aside>
  )
}
