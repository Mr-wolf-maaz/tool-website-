"use client";
import { useEffect, useState } from "react";

export function Toaster() {
  const [msg, setMsg] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handler(e: CustomEvent<string>) {
      setMsg(e.detail);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }
    window.addEventListener("toolforge-toast" as any, handler as any);
    return () => window.removeEventListener("toolforge-toast" as any, handler as any);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-xl border border-border-2 bg-surface-3 px-5 py-3 text-[13px] font-medium text-text shadow-lg">
      {msg}
    </div>
  );
}
