import React from "react";
import { motion } from "framer-motion";
import FloatingHearts from "../components/FloatingHearts";
import ConfettiEffect from "../components/ConfettiEffect";
import "./Home.css";
import MemoryHighlights from "../components/MemoryHighlights";

const Home = () => {
  const [confettiActive, setConfettiActive] = React.useState(false);

  return (
    <div className="home-container">
      <FloatingHearts />
      <ConfettiEffect active={confettiActive} />

      <motion.div
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">
          <span className="highlight">Happy Anniversary</span> My Love
        </h1>
        <p className="hero-subtitle">
          Celebrating our beautiful journey together
        </p>

        <motion.button
          className="confetti-button"
          onClick={() => setConfettiActive(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Surprise Me!
        </motion.button>
      </motion.div>

      <div className="memory-highlight-section">
        <h2>Our Special Moments</h2>
        <MemoryHighlights />
      </div>
    </div>
  );
};

export default Home;
