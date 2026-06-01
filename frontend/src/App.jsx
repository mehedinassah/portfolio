import "./index.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroAdvanced from "./components/HeroCanvas";
import About from "./components/About";
import SelectedWork from "./components/SelectedWork";
import TechnicalArsenal from "./components/TechnicalArsenal";
import OffTheClock from "./components/OffTheClock";
import CinematicContact from "./components/CinematicContact";
import Footer from "./components/Footer";
import MehediOSLoader from "./components/MehediOSLoader";

const INTRO_STORAGE_KEY = "mehedi-os-intro-seen";

function readIntroState() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export default function App() {
  const [showLoader, setShowLoader] = useState(() => !readIntroState());
  const [contentReady, setContentReady] = useState(() => readIntroState());

  useEffect(() => {
    // If no hash is provided, scroll to hero section
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    document.body.style.overflow = showLoader ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoader]);

  const handleIntroComplete = () => {
    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      // Ignore storage failures and fall back to the current session only.
    }

    setContentReady(true);
    setShowLoader(false);
  };

  return (
    <div className="site-shell relative min-h-screen bg-paper text-ink">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 column-rules" />
        <div className="absolute inset-0 paper-grain opacity-60" />
      </div>

      <motion.div
        className="relative z-0"
        animate={contentReady ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 1.01, filter: "blur(12px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Navbar />
        <main>
          <HeroAdvanced skipBootAnimation={showLoader} />
          <About />
          <SelectedWork />
          <TechnicalArsenal />
          <OffTheClock />
          <CinematicContact />
        </main>
        <Footer />
      </motion.div>

      <AnimatePresence mode="wait">
        {showLoader ? <MehediOSLoader key="mehedios-loader" onComplete={handleIntroComplete} /> : null}
      </AnimatePresence>
    </div>
  );
}
