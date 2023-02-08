import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  // const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  //   bg-grey z-30 flex flex-col justify-center items-center text-center text-deep-blue`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      {/* <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div> */}
      <img className = "border-2 hover:scale-110 duration-700" src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-36 pb-24">

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="bioanalytics" />
          <Project title="frame" />

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
