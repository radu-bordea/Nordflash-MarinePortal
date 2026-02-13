// links.ts
import {
  FileText,
  BookOpen,
  Anchor,
  Settings,
  AlertTriangle,
  ClipboardList,
  Flag,
  Layers,
  Activity,
  Award,
} from "lucide-react"

import type { LucideIcon } from "lucide-react"

// ---------------- Type ----------------
export type links = {
  name: string
  href: string
  icon?: LucideIcon // optional because navLinks may not have icons
}

// ---------------- Top navigation links ----------------
export const navLinks: links[] = [
  { name: "Home", href: "/" },
  { name: "Rules", href: "/rules" },
  { name: "Contact", href: "/contact" },
]

// ---------------- Home links ----------------
export const homeLinks: links[] = [
  { name: "All Forms", href: "/home/all-forms", icon: Layers },
  { name: "Work Permit", href: "/portal/work-permit", icon: Layers },
  { name: "Company Circulars", href: "/home/company-circulars", icon: ClipboardList },
  { name: "Flag Requirements & Circulars", href: "/home/flag-requirements-circulars", icon: Flag },
  { name: "Risk Assessment", href: "/portal/risk-assessment", icon: Activity },
  { name: "Incident Investigation / NM / UA", href: "/portal/incident-investigation", icon: AlertTriangle },
]

// ---------------- Portal links ----------------
export const portalLinks: links[] = [
  { name: "Crewing", href: "/portal/crewing", icon: Layers },
  { name: "Company Policies", href: "/portal/company-policies", icon: FileText },
  { name: "Manuals & Procedures", href: "/portal/manuals-procedures", icon: BookOpen },
  { name: "Deck Forms", href: "/portal/deck-forms", icon: Anchor },
  { name: "Engine Forms", href: "/portal/engine-forms", icon: Settings },
  { name: "Work Permit", href: "/portal/work-permit", icon: FileText },
  { name: "Miscellaneous Forms", href: "/portal/miscellaneous-forms", icon: Settings },
  { name: "Risk Assessment", href: "/portal/risk-assessment", icon: Activity },
  { name: "Incident Investigation / NM / UA", href: "/portal/incident-investigation", icon: AlertTriangle },
  { name: "Library", href: "/portal/library", icon: BookOpen },
  { name: "Trainings", href: "/portal/trainings", icon: Award },
]
