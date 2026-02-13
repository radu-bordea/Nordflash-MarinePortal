// app/(home)/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { homeLinks } from "@/lib/links"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [query, setQuery] = useState("")

  const filteredLinks = homeLinks.filter((link) =>
    link.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Portal Home</h1>
        <p className="text-sm text-muted-foreground">
          Quickly access forms and resources
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mb-8">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search forms, permits, circulars..."
          className="pl-8"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Grid */}
      {filteredLinks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLinks.map((link) => {
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "group rounded-xl border bg-card/80 backdrop-blur p-6",
                  "flex items-center gap-4 transition-all",
                  "hover:shadow-lg hover:-translate-y-1 hover:bg-accent/40",
                  "active:scale-[0.98]"
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
                    Open {link.name}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground mt-10">
          No results found.
        </p>
      )}
    </section>
  )
}
