import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("projects");
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  return (
    <div className="app bg-black">
      <Navbar selectedPage={selectedPage} setSelectedPage ={setSelectedPage} />
      <div className={`mx-auto ${isDesktop ? 'w-1/2' : 'w-4/5'}`}>
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
          <Projects />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
