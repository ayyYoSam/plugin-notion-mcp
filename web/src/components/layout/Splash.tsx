import { motion } from "framer-motion";
import logo from "../../assets/logo.png";

export function Splash() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        <motion.img
          src={logo}
          alt="Plugin MCP"
          className="w-32 h-32 object-contain"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />

        <motion.div
          className="w-10 h-10 rounded-full border-4 border-zinc-200 border-t-violet-600"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            ease: "linear"
          }}
        />
      </div>
    </div>
  );
}