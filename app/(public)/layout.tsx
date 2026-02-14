// app/(home)/layout.tsx
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="h-full shrink-0">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 h-full overflow-hidden bg-background/80">
          <div className="h-full overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
