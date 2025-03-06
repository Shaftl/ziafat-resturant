import { useState, useRef, useEffect } from "react";
import "./App.css";
import StickyNavigation from "./components/StickyNavigation";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [isPlaying, setIsPlaying] = useState(false); // Track if music is playing
  const audioRef = useRef(null);
  const [isMenuNav, setIsMenuNav] = useState(true);

  // Function to start audio when user interacts
  const enableAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Autoplay blocked:", error);
        });
    }
  };

  // Function to toggle mute/unmute
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Add event listener to enable audio after first user interaction
    document.addEventListener("click", enableAudio);
    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  return (
    <div>
      {/* Background Music (Starts Muted) */}
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/bg music.mp3" type="audio/mp3" />
      </audio>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        style={{
          zIndex: "10000",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          padding: "1rem",
          fontSize: "1.8rem",
          background: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isMuted ? (
          <i className="bx bx-volume-mute"></i>
        ) : (
          <i className="bx bx-volume-full"></i>
        )}
      </button>

      <Header setIsMenuNav={setIsMenuNav} />
      <StickyNavigation setIsMenuNav={setIsMenuNav} isMenuNav={isMenuNav} />
      <HomePage />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
