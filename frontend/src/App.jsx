import "./index.css";
import Navbar from "./components/Navbar";
import HeroAdvanced from "./components/HeroCanvas";
import AboutCodeEditor from "./components/AboutCodeEditor";
import Skills3D from "./components/Skills3D";
import Projects3DArc from "./components/Projects3DArc";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TerminalContact from "./components/TerminalContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: "#030712" }}>
      <Navbar />
      <main>
        <HeroAdvanced />
        <AboutCodeEditor />
        <Skills3D />
        <Projects3DArc />
        <ExperienceTimeline />
        <TerminalContact />
      </main>
      <Footer />
    </div>
  );
}
