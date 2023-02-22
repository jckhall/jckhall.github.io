import { motion } from "framer-motion";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, selectedPage, setSelectedPage }) => {
  const projectTitle = title;
  const [isPopupToggled, setPopupToggle] = useState(false);
  console.log(selectedPage)

  return (
    <motion.div variants={projectVariant} className="relative">
      <AnchorLink href="#about">
        <img
            className = "cursor-pointer border-2 sm:hover:scale-105 duration-700"
            src={`../assets/${projectTitle}`} alt={projectTitle}/>
      </AnchorLink>

      {/* MORE INFO POPUP */}
      {isPopupToggled && (
        <div className="z-50 inset-0 fixed h-screen w-screen m-auto backdrop-blur-sm">
          <div className="z-60 fixed h-4/6 w-5/6 m-auto rounded-3xl inset-0 p-8 bg-beige">
            {/* CLOSE ICON */}
            <div className="flex justify-end">
              <button onClick={() => setPopupToggle(!isPopupToggled)}>
                <img alt="close-icon" src="../assets/close-icon-black.svg" />
              </button>
            </div>

            <div className="flex flex-col justify-center items-center text-xl gap-10 text-black font-sans font-regular">
              <p className="m-12">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
              </p>
            </div>
          </div>
        </div>
        )}
    </motion.div>
  );
};

const Projects = ({ selectedPage, setSelectedPage }) => {
  return (
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-9 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="row-span-3 col-span-3">
            <Project
              title="bioanalytics.png"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
          </div>
          <div
            className="row-span-1 col-span-2">
            <Project
              title="tiles.gif"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
          </div>
          <div 
            className="row-span-2 col-span-4">
            <Project
              title="gum_2.png"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
          </div>
          <div
            className="row-span-1 col-span-2">
            <Project
              title="drawing_1.png"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}/>
          </div>
        </motion.div>
      </div>
  );
};

export default Projects;
