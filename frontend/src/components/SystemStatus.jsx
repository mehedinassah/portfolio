import { useState, useEffect } from "react";
import { CheckCircle2, Circle } from "lucide-react";

export default function SystemStatus() {
  const [time, setTime] = useState(new Date());
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dhaka timezone (UTC+6)
  const dhakaTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
  const hours = String(dhakaTime.getHours()).padStart(2, "0");
  const minutes = String(dhakaTime.getMinutes()).padStart(2, "0");

  // Simple availability logic: available 9 AM - 6 PM
  const hourNum = dhakaTime.getHours();
  const isWorkingHours = hourNum >= 9 && hourNum < 18;

  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-accent-slate/5 border border-accent-slate/20 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        {isWorkingHours ? (
          <CheckCircle2 size={14} className="text-emerald-500 animate-pulse-soft" />
        ) : (
          <Circle size={14} className="text-accent-slate" />
        )}
        <span className="text-xs font-mono text-white/60">
          {isWorkingHours ? "Available" : "Offline"}
        </span>
      </div>
      <div className="w-px h-3 bg-accent-slate/20" />
      <span className="text-xs font-mono text-accent-slate-light">
        {hours}:{minutes} {isWorkingHours ? "AM" : "PM"}
      </span>
    </div>
  );
}
