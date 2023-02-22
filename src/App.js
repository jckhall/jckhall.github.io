import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
// import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Projects from "./scenes/Projects";
import About from "./scenes/About";

function App() {
  const [selectedPage, setSelectedPage] = useState("work");
  // const isDesktop = useMediaQuery("(min-width: 948px)");
  return (
    <div className="app bg-black">
      <div className="h-screen">
        <div className="z-20 w-full fixed py-4 top-0">
          <div className="flex items-center justify-between">
            <h4 className="font-sans text-6xl px-5 font-medium">JACK HALL</h4>
          </div>
        </div>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <section id="work">
          <div className="mx-auto pt-48 w-4/5">
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
            >
              <Projects selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </motion.div>
          </div>
        </section>
      </div>
      <About/>
    </div>
  );
}

export default App;