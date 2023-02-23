import { motion } from "framer-motion";
// import { useState } from "react";
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

const Project = ({ title, setSelectedProject }) => {
  const project = title.split('.')[0].toLowerCase()

  return (
    <motion.div
      variants={projectVariant}
      className="relative">
      <AnchorLink href="#details">
        <img
            onClick={() => setSelectedProject(title)}
            className = "cursor-pointer border-2 sm:hover:scale-105 duration-700"
            src={`../assets/${title}`} alt={project}/>
      </AnchorLink>
    </motion.div>
  );
};

const Projects = ( { setSelectedProject } ) => {
  return (
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-9 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="row-span-3 col-span-3">
            <Project
              title="bioanalytics.png"
              setSelectedProject={setSelectedProject}/>
          </div>
          <div
            className="row-span-1 col-span-2">
            <Project
              title="tiles.gif"
              setSelectedProject={setSelectedProject}/>
          </div>
          <div 
            className="row-span-2 col-span-4">
            <Project
              title="gum.png"
              setSelectedProject={setSelectedProject}/>
          </div>
          <div
            className="row-span-1 col-span-2">
            <Project
              title="drawing.png"
              setSelectedProject={setSelectedProject}/>
          </div>
        </motion.div>
      </div>
  );
};

export default Projects;
