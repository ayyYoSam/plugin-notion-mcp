import { useEffect, useState } from "react";

import { Splash } from "../components/layout/Splash";
import { Dashboard } from "../pages/Dashboard";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return <Dashboard />;
}