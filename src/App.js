import Navbar from "./scenes/Navbar";
import { motion } from "framer-motion";
import useMediaQuery from "./hooks/useMediaQuery";
import { useState } from "react";
import Projects from "./scenes/Projects";
import ProjectDetails from "./scenes/ProjectDetails";
import ProjectDetailsMobile from "./scenes/ProjectDetailsMobile";
import AnchorLink from "react-anchor-link-smooth-scroll";



function App() {
  const [selectedPage, setSelectedPage] = useState("work");
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 948px)");

  return (
    <div className="app bg-black">
      {isDesktop && (
        <section id="work">
          <div className="z-20 w-full fixed py-4 top-0">
            <div className="flex items-center justify-between">
              <h4 className="font-sans mt-12 text-xl ml-24 mr-12 px-5 font-medium">JACK HALL</h4>
            </div>
          </div>
          <div className="h-screen sm:flex sm:items-center">
            <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setSelectedProject={setSelectedProject}
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}/>
              <div className="m-auto pt-48 sm:pt-20 w-4/5">
                <motion.div
                  margin="0 0 -200px 0"
                  amount="all"
                  onViewportEnter={() => setTimeout(() => {setSelectedPage("work")}, 400)}
                >
                  <Projects isDesktop={isDesktop} setSelectedProject={setSelectedProject} />
                </motion.div>
              </div>
          </div>
        </section>
      )}
      {!isDesktop && !selectedProject && (
        <section id="work">
          <div className="z-20 w-full fixed py-4 top-0">
             <div className="flex items-center justify-between">
              <h4 className="font-sans text-6xl mr-12 px-5 font-medium">JACK HALL</h4>
            </div>
          </div>
          <div className="md:flex sm:items-center">
            <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setSelectedProject={setSelectedProject}
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}/>
              <div className="m-auto pt-64 md:pt-20 w-4/5">
                <motion.div
                  margin="0 0 -200px 0"
                  amount="all"
                  onViewportEnter={() => setTimeout(() => {setSelectedPage("work")}, 400)}
                >
                  <Projects isDesktop={isDesktop} setSelectedProject={setSelectedProject} />
                </motion.div>
              </div>
          </div>
        </section>
      )}
      {isDesktop && (
        <section id="about" className="block relative -top-[10px] invisible"></section>
      )}
      {isDesktop && selectedProject && (
      <div>
        <div className="h-[calc(100vh-110px)] w-full rounded-3xl border-green border-4">
          <AnchorLink href="#work" className="z-50 absolute right-0 pr-10 pt-6">
              <img alt="up-chevron" src={process.env.PUBLIC_URL + "/assets/up-chevron.svg"} />
          </AnchorLink>
          <ProjectDetails selectedProject={selectedProject} setSelectedPage={setSelectedPage}/>
        </div>
      </div>
      )}
      {!isDesktop && selectedProject && selectedProject!=='about' && (
        <ProjectDetailsMobile selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
      )}
      {!isDesktop && selectedProject==='about' && (
      <div className="z-40 fixed h-full inset-0 p-6 bg-black">
          <div className="flex justify-end">
          <button
              className="z-80 rounded-full bg-black"
              onClick={() => {setSelectedProject(undefined);}}>
              <img alt="menu-icon" src={process.env.PUBLIC_URL + "/assets/close-icon.svg"} />
          </button>
          </div>
      <div className="h-full pt-32 p-8">
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onViewportEnter={() => setSelectedPage("about")}
          >
          <p className="font-sans text-2xl text-center">
            Hey! My name's Jack, I'm a front end dev from Sydney and I love building an experience full of utility and delight
          </p>
          <p className="mt-12 font-sans text-xl text-center">
            Feel free to reach out on any of the pipes below
          </p>
          <div className="flex justify-center my-10 gap-7">
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="linkedin-link" src={process.env.PUBLIC_URL + "/assets/linkedin.png"}/>
            </a>
            <a
              className="hover:opacity-50 transition duration-500"
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="instagram-link" src={process.env.PUBLIC_URL + "/assets/instagram.png"} />
            </a>
          </div>
        </motion.div>
        </div>
      </div>)}
    </div>
  );
}

export default App;