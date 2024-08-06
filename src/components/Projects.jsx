import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

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
  const project = title.split(".")[0].toLowerCase();
  const isDesktop = useMediaQuery("(min-width: 948px)");

  const goToSection = () => {
    if (isDesktop) {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div variants={projectVariant} className="relative w-full h-full">
      <img
        draggable="false"
        onClick={() => {
          setSelectedProject(project);
          setTimeout(() => {
            goToSection();
          }, 5);
        }}
        className="cursor-pointer border-2 sm:hover:rounded-xl sm:hover:scale-105 duration-700 object-cover w-full h-full"
        src={process.env.PUBLIC_URL + `/assets/${title}`}
        alt={project}
      />
    </motion.div>
  );
};

const Projects = ({ setSelectedProject }) => {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        className="sm:grid sm:grid-cols-12 gap-5 w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="row-span-2 col-span-3">
          <Project
            title="bioanalytics.png"
            setSelectedProject={setSelectedProject}
          />
        </div>
        <div className="row-span-1 col-span-2">
          <Project title="tiles.gif" setSelectedProject={setSelectedProject} />
        </div>
        <div className="row-span-2 col-span-4">
          <Project title="thesis.png" setSelectedProject={setSelectedProject} />
        </div>
        <div className="row-span-1 col-span-3">
          <Project title="dither.png" setSelectedProject={setSelectedProject} />
        </div>
        <div className="row-span-1 col-span-2">
          <Project title="art.png" setSelectedProject={setSelectedProject} />
        </div>
        <div className="row-span-1 col-span-3">
          <Project title="dish.png" setSelectedProject={setSelectedProject} />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
