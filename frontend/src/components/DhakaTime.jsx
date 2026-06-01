import { useEffect, useState } from "react";

// Always computes the real time in Dhaka (UTC+6), no matter where the visitor is.
const timeFmt = new Intl.DateTimeFormat("en-US", {
  timeZone: "Asia/Dhaka",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function dhakaHour(date) {
  const h = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    hourCycle: "h23",
  }).format(date);
  return parseInt(h, 10);
}

function vibe(h) {
  if (h >= 0 && h < 3) return "probably still coding";
  if (h >= 3 && h < 8) return "probably sleeping";
  if (h >= 8 && h < 11) return "probably on a chaa break";
  if (h >= 11 && h < 17) return "probably coding";
  if (h >= 17 && h < 20) return "probably watching anime";
  if (h >= 20 && h < 23) return "probably on a chaa break";
  return "probably still coding";
}

export default function DhakaTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className="flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 animate-pulse bg-accent" aria-hidden="true" />
      <span>
        <span className="text-paper/70">{timeFmt.format(now)} in Dhaka</span>, {vibe(dhakaHour(now))}
      </span>
    </p>
  );
}
