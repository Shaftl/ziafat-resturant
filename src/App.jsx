import { useState } from "react";
import "./App.css";
import StickyNavigation from "./components/StickyNavigation";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  const [isMenuNav, setIsMenuNav] = useState(true);
  return (
    <div>
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
