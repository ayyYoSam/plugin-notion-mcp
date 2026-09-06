import { Github } from "lucide-react";

import { ThemeToggle } from "../theme/ThemeToggle";

export function Navbar() {
  return (
    <header className="h-16 border-b backdrop-blur-xl flex items-center justify-between px-6 bg-background/80">
      <div>
        <h1 className="font-semibold text-lg">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={20} />
        </a>

        <ThemeToggle />
      </div>
    </header>
  );
}