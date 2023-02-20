import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Projects from "./scenes/Projects";

function App() {
  const [selectedPage, setSelectedPage] = useState("work");
  const isDesktop = useMediaQuery("(min-width: 948px)");
  return (
    <div className="app bg-black">
      <div className="h-screen">
        <div className={`z-20 w-full fixed py-4 ${isDesktop ? 'top-0' : 'top-0'}`}>
          <div className="flex items-center justify-between">
            <h4 className="font-sans text-6xl px-5 font-medium">JACK HALL</h4>
          </div>
        </div>
        <Navbar selectedPage={selectedPage} setSelectedPage ={setSelectedPage} />
          <div className={`mx-auto pt-36 ${isDesktop ? 'w-4/5' : 'w-4/5'}`}>
            <motion.div
              margin="0 0 -200px 0"
              amount="all"
            >
              <Projects />
            </motion.div>
          </div>
      </div>
      {/* <div className="z-80 h-screen w-screen ">
        <div className="h-4/5 w-screen rounded-t-full absolute border-stone-400 bg-green">
          <div className="pt-36 flex flex-col justify-center items-center text-xl text-black font-sans font-regular">
            <p className="mt-12">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
              porttitor accumsan tincidunt.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
