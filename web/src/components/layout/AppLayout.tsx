import type { ReactNode } from "react";

import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function AppLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}