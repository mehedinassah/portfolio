import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const SPRING = {
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.9,
};

const POSITIONS = [-2, -1, 0, 1, 2];

const DEPTH = {
  "-2": { x: -220, y: 40, scale: 0.75, opacity: 0.62, blur: 6, brightness: 0.6, z: 10, shadow: "0 12px 24px rgba(15, 23, 42, 0.24)" },
  "-1": { x: -110, y: 20, scale: 0.88, opacity: 0.78, blur: 2, brightness: 0.8, z: 20, shadow: "0 16px 32px rgba(15, 23, 42, 0.28)" },
  "0": { x: 0, y: 0, scale: 1, opacity: 1, blur: 0, brightness: 1, z: 30, shadow: "0 30px 64px rgba(15, 23, 42, 0.42)" },
  "1": { x: 110, y: 20, scale: 0.88, opacity: 0.78, blur: 2, brightness: 0.8, z: 20, shadow: "0 16px 32px rgba(15, 23, 42, 0.28)" },
  "2": { x: 220, y: 40, scale: 0.75, opacity: 0.62, blur: 6, brightness: 0.6, z: 10, shadow: "0 12px 24px rgba(15, 23, 42, 0.24)" },
};

const CARD_THEMES = [
  {
    gradient: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    glow: "0 20px 60px rgba(59, 130, 246, 0.15)",
    accentBorder: "rgba(96, 165, 250, 0.35)",
  },
  {
    gradient: "linear-gradient(135deg, #1a102a, #5b21b6)",
    glow: "0 20px 60px rgba(139, 92, 246, 0.15)",
    accentBorder: "rgba(167, 139, 250, 0.35)",
  },
  {
    gradient: "linear-gradient(135deg, #0f2a2a, #0d9488)",
    glow: "0 20px 60px rgba(20, 184, 166, 0.15)",
    accentBorder: "rgba(45, 212, 191, 0.35)",
  },
  {
    gradient: "linear-gradient(135deg, #0b132b, #1e40af)",
    glow: "0 20px 60px rgba(59, 130, 246, 0.14)",
    accentBorder: "rgba(129, 140, 248, 0.32)",
  },
];

function getTheme(projectId) {
  const idValue = Number(projectId) || String(projectId).length;
  return CARD_THEMES[Math.abs(idValue) % CARD_THEMES.length];
}

function wrapIndex(index, length) {
  return (index + length) % length;
}

const StackedCard = memo(function StackedCard({
  project,
  position,
  layer,
  isActive,
  compact,
}) {
  const theme = getTheme(project.id);

  return (
    <motion.article
      aria-hidden={!isActive}
      className="absolute left-1/2 top-0 w-[min(88vw,330px)]"
      style={{
        zIndex: layer.z,
        willChange: "transform, filter, opacity",
        transform: "translateZ(0)",
        pointerEvents: isActive ? "auto" : "none",
      }}
      initial={false}
      animate={{
        x: `calc(-50% + ${layer.x}px)`,
        y: layer.y,
        scale: layer.scale,
        opacity: layer.opacity,
        filter: `blur(${layer.blur}px) brightness(${layer.brightness})`,
        rotate: 0,
      }}
      transition={{ ...SPRING, delay: Math.abs(position) * 0.04 }}
    >
      <motion.div
        className="relative aspect-[4/5] rounded-3xl border p-5 md:p-6 backdrop-blur-xl flex flex-col overflow-hidden"
        style={{
          borderColor: theme.accentBorder,
          backgroundImage: theme.gradient,
          boxShadow: `${layer.shadow}, ${theme.glow}`,
          backdropFilter: "blur(20px)",
        }}
        transition={SPRING}
        whileHover={isActive ? { y: -4 } : undefined}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(15, 20, 35, 0.6)" }}
          aria-hidden="true"
        />

        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <div className="relative mb-2 text-3xl leading-none">{project.emoji}</div>
            <h3 className="relative text-lg md:text-xl font-semibold text-white tracking-tight line-clamp-1">
              {project.title}
            </h3>
          </div>
          <span className="relative rounded-full border border-white/20 bg-black/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-100">
            {project.category}
          </span>
        </div>

        <p className={`relative text-sm text-slate-100 leading-relaxed mb-4 ${compact ? "line-clamp-3" : "line-clamp-4"}`}>
          {project.description}
        </p>

        <div className="relative mb-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/20 bg-black/20 px-2.5 py-1 text-xs font-medium text-slate-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="relative mt-auto flex items-center gap-4 border-t border-white/20 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-100 transition-colors hover:text-white"
          >
            Code
          </a>
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyan-200 transition-colors hover:text-cyan-100"
            >
              Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.article>
  );
});

export default function StackedCardCarousel({ projects }) {
  const [centerIndex, setCenterIndex] = useState(0);
  const [hoverZone, setHoverZone] = useState(null);
  const [compact, setCompact] = useState(
    typeof window !== "undefined" ? window.innerWidth < 900 : false
  );

  const projectCount = projects.length;

  useEffect(() => {
    const onResize = () => setCompact(window.innerWidth < 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setCenterIndex((prev) => wrapIndex(prev, projectCount || 1));
  }, [projectCount]);

  const shiftRight = useCallback(() => {
    if (!projectCount) return;
    setCenterIndex((prev) => wrapIndex(prev + 1, projectCount));
  }, [projectCount]);

  const shiftLeft = useCallback(() => {
    if (!projectCount) return;
    setCenterIndex((prev) => wrapIndex(prev - 1, projectCount));
  }, [projectCount]);

  useEffect(() => {
    if (!hoverZone) return undefined;

    const interval = window.setInterval(() => {
      if (hoverZone === "right") shiftRight();
      if (hoverZone === "left") shiftLeft();
    }, 980);

    return () => window.clearInterval(interval);
  }, [hoverZone, shiftLeft, shiftRight]);

  const visibleCards = useMemo(() => {
    if (!projectCount) return [];

    const offsetXMultiplier = compact ? 0.68 : 1;

    return POSITIONS.map((position) => {
      const projectIndex = wrapIndex(centerIndex + position, projectCount);
      const layer = DEPTH[String(position)];
      return {
        id: `${projects[projectIndex].id}-${position}`,
        project: projects[projectIndex],
        position,
        layer: {
          ...layer,
          x: Math.round(layer.x * offsetXMultiplier),
        },
        isActive: position === 0,
      };
    }).sort((a, b) => a.layer.z - b.layer.z);
  }, [centerIndex, compact, projectCount, projects]);

  return (
    <div className="relative mx-auto max-w-6xl">
      <div
        className="relative h-[500px] md:h-[560px] overflow-hidden"
        onMouseLeave={() => setHoverZone(null)}
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div
          className="pointer-events-none absolute left-0 top-0 z-30 h-full w-24 bg-gradient-to-r from-[#030712] to-transparent md:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 z-30 h-full w-24 bg-gradient-to-l from-[#030712] to-transparent md:w-32"
          aria-hidden="true"
        />

        <div
          className="absolute inset-y-0 left-0 w-[26%] z-40 hidden md:block"
          onMouseEnter={() => {
            setHoverZone("left");
            shiftLeft();
          }}
          onMouseLeave={() => setHoverZone(null)}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-[26%] z-40 hidden md:block"
          onMouseEnter={() => {
            setHoverZone("right");
            shiftRight();
          }}
          onMouseLeave={() => setHoverZone(null)}
          aria-hidden="true"
        />

        {visibleCards.map(({ id, project, position, layer, isActive }) => (
          <StackedCard
            key={id}
            project={project}
            position={position}
            layer={layer}
            isActive={isActive}
            compact={compact}
          />
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={shiftLeft}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          aria-label="Show previous project"
        >
          Prev
        </button>
        <div className="flex items-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setCenterIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === centerIndex ? "w-8 bg-cyan-300" : "w-2.5 bg-white/25 hover:bg-white/45"
              }`}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={shiftRight}
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
          aria-label="Show next project"
        >
          Next
        </button>
      </div>
    </div>
  );
}