import { motion } from "framer-motion";

import logo from "../../assets/logo.png";

import {
  LayoutDashboard,
  Download,
  ShieldCheck,
  Stethoscope,
  Monitor,
  BookOpen,
  Settings
} from "lucide-react";

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard"
  },
  {
    icon: Download,
    label: "Install"
  },
  {
    icon: ShieldCheck,
    label: "Verify"
  },
  {
    icon: Stethoscope,
    label: "Doctor"
  },
  {
    icon: Monitor,
    label: "Clients"
  },
  {
    icon: BookOpen,
    label: "Docs"
  },
  {
    icon: Settings,
    label: "Settings"
  }
];

export function Sidebar() {
  return (
    <aside className="w-72 border-r bg-background/90 backdrop-blur-xl">
      <div className="p-6 flex items-center gap-4">
        <img
          src={logo}
          alt="Plugin MCP"
          className="w-12 h-12 object-contain"
        />

        <div>
          <h2 className="font-bold text-lg">
            Plugin MCP
          </h2>

          <p className="text-xs text-muted-foreground">
            Notion Manager
          </p>
        </div>
      </div>

      <nav className="px-3">
        {items.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 4 }}
            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-accent transition"
          >
            <item.icon size={20} />
            {item.label}
          </motion.button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-72 border-t p-4 text-sm text-muted-foreground">
        v1.0.0
      </div>
    </aside>
  );
}