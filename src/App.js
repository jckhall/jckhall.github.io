import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Projects from "./scenes/Projects";
import ProjectDetails from "./scenes/ProjectDetails";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ChevronLeft, ChevronRight } from "react-feather"



function App() {
  const [selectedPage, setSelectedPage] = useState("work");
  const [selectedProject, setSelectedProject] = useState(undefined);
  const isDesktop = useMediaQuery("(min-width: 948px)");

  return (
    <div className="app bg-black">
      <div className="z-20 w-full fixed py-4 top-0">
        <div className="flex items-center justify-between">
          <h4 className="font-sans text-6xl mr-12 px-5 font-medium">JACK HALL</h4>
        </div>
      </div>
      <section id="work">
        <div className="h-screen sm:flex sm:items-center">
          <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} setSelectedProject={setSelectedProject} />
            <div className="m-auto pt-48 sm:pt-20 w-4/5">
              <motion.div
                margin="0 0 -200px 0"
                amount="all"
                onViewportEnter={() => setTimeout(() => {setSelectedPage("work")}, 400)}
              >
                <Projects isDesktop={isDesktop} setSelectedProject={setSelectedProject}/>
              </motion.div>
            </div>
        </div>
      </section>
      {isDesktop && (
        <section id="about" className="block relative -top-[10px] invisible"></section>
      )}
      <div className="mb-28">
        {isDesktop && selectedProject && (
          <div className="h-[calc(100vh-110px)] w-full rounded-3xl border-green border-4">
            <AnchorLink href="#work" className="z-50 absolute right-0 pr-10 pt-6">
                <img alt="up-chevron" src="../assets/up-chevron.svg" />
            </AnchorLink>
            <ProjectDetails selectedProject={selectedProject} setSelectedPage={setSelectedPage}/>
          </div>
        )}
      </div>
      {/* <div className="z-5 absolute inset-0 flex items-center justify-between p-8">
				<button>
        	<ChevronLeft size={20} />
        </button>
        <button>
        	<ChevronRight size={20} />
        </button>
      </div> */}
    </div>
  );
}

export default App;