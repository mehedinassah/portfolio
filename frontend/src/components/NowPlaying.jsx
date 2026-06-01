import { useEffect, useRef, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { tracks } from "../data/tracks";

const randomIndex = () => Math.floor(Math.random() * tracks.length);
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export default function NowPlaying() {
  // start on a random track at a random point, so it feels mid-song / live
  const [index, setIndex] = useState(randomIndex);
  const [elapsed, setElapsed] = useState(() => Math.floor(Math.random() * 90));
  const timer = useRef(null);

  const track = tracks[index];

  useEffect(() => {
    timer.current = setInterval(() => {
      setElapsed((prev) => {
        if (prev + 1 >= track.len) {
          // song "ends" → shuffle to a different track
          setIndex((cur) => {
            let next = randomIndex();
            while (next === cur && tracks.length > 1) next = randomIndex();
            return next;
          });
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(timer.current);
  }, [track.len]);

  const pct = Math.min(100, (elapsed / track.len) * 100);

  return (
    <div className="flex h-full flex-col border-2 border-line bg-paper">
      <div className="flex items-center justify-between border-b-2 border-line bg-ink px-4 py-2.5 text-paper">
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em]">
          <FaSpotify className="shrink-0 text-[#1DB954]" /> Song I'm currently listening to
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1DB954]" /> live
        </span>
      </div>

      <div className="flex flex-1 items-center gap-4 p-4">
        {/* album block + equalizer */}
        <div className="relative grid h-20 w-20 shrink-0 place-items-center border-2 border-line bg-accent">
          <div className="flex items-end gap-1" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="eq-bar" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-2xl uppercase leading-none">{track.title}</p>
          <p className="mt-1 truncate font-mono text-xs uppercase tracking-[0.12em] text-inksoft">
            {track.artist}
          </p>

          <div className="mt-3 h-1.5 w-full border border-line">
            <div className="h-full bg-ink transition-[width] duration-1000 ease-linear" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-1.5 flex justify-between font-mono text-[10px] text-inkfaint">
            <span>{fmt(elapsed)}</span>
            <span>{fmt(track.len)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
