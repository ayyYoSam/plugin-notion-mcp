import { useEffect, useState } from "react";

import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Splash } from "./components/layout/Splash";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {loading ? <Splash /> : <Dashboard />}
    </ThemeProvider>
  );
}