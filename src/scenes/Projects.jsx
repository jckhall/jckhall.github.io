import { motion } from "framer-motion";
import { useState } from "react";

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

const Project = ({ title }) => {
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <img
        className = "border-2 sm:hover:scale-105 duration-700"
        src={`../assets/${projectTitle}`} alt={projectTitle}/>
    </motion.div>
  );
};

const Projects = () => {
  const [isPopupToggled, setPopupToggle] = useState(false);

  return (
    <section id="projects">

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-5 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="row-span-2 col-span-2"
            onClick={() => setPopupToggle(!isPopupToggled)}>
            <Project title="bioanalytics.png" />
          </div>
          <div
            className="row-span-1 col-span-1"
            onClick={() => setPopupToggle(!isPopupToggled)}>
            <Project title="tiles.gif" />
          </div>
          <div 
            className="row-span-2 col-span-2"
            onClick={() => setPopupToggle(!isPopupToggled)}>
            <Project title="gum_2.png" />
          </div>
          <div
            className="row-span-1 col-span-1"
            onClick={() => setPopupToggle(!isPopupToggled)}>
            <Project title="drawing_1.png" />
          </div>
          <div
            className="row-span-1 col-span-3"
            onClick={() => setPopupToggle(!isPopupToggled)}>
            <Project title="photo.png" />
          </div>

        </motion.div>
      </div>

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
    </section>
  );
};

export default Projects;
