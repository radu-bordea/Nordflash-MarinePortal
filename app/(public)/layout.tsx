import { Navbar } from "@/components/navbar"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        {children}
      </main>
    </>
  )
}
