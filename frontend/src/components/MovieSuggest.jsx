import { useState } from "react";
import { Clapperboard, CornerDownLeft } from "lucide-react";
import { isWatched, watchedMessages, notWatchedMessages, randomFrom } from "../data/movies";

export default function MovieSuggest() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null); // { seen: bool, message: string, title: string }

  const submit = (e) => {
    e.preventDefault();
    const guess = value.trim();
    if (guess.length < 2) {
      setResult({ seen: null, message: "Type a film title first 🙂", title: "" });
      return;
    }
    const seen = isWatched(guess);
    setResult({
      seen,
      message: seen ? randomFrom(watchedMessages) : randomFrom(notWatchedMessages),
      title: guess,
    });
    setValue("");
  };

  return (
    <div className="flex h-full flex-col border-2 border-line bg-paper">
      <div className="flex items-center gap-2 border-b-2 border-line bg-ink px-4 py-2.5 text-paper">
        <Clapperboard size={15} className="text-accent" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Suggest me a film</span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-sm leading-relaxed text-inksoft">
          I watch a <em>lot</em> of movies. Type one you love and let's see if it's already on my watched list.
        </p>

        <form onSubmit={submit} className="mt-4 flex border-2 border-line">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. Interstellar, 3 Idiots, Parasite…"
            aria-label="Movie title"
            className="w-full bg-transparent px-3 py-3 font-mono text-sm text-ink placeholder:text-inkfaint focus:outline-none"
          />
          <button
            type="submit"
            className="flex items-center gap-1.5 border-l-2 border-line bg-ink px-4 font-mono text-[11px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent"
          >
            Ask <CornerDownLeft size={13} />
          </button>
        </form>

        {result ? (
          <div
            className={`mt-4 border-2 p-4 ${
              result.seen === null
                ? "border-line bg-paper2"
                : result.seen
                ? "border-line bg-ink text-paper"
                : "border-accent bg-paper"
            }`}
          >
            {result.title ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                “{result.title}”
              </p>
            ) : null}
            <p className={`${result.title ? "mt-2" : ""} font-display text-lg uppercase leading-tight`}>
              {result.message}
            </p>
          </div>
        ) : (
          <p className="mt-auto pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-inkfaint">
            // typos are fine, i'll still recognise it
          </p>
        )}
      </div>
    </div>
  );
}
