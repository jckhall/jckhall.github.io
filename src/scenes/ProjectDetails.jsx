// import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ProjectDetails = ( { selectedProject } ) => {

	return (
	  <section id="details">
				<div className="z-50 h-full w-full">
					<div className="h-[85%] w-full rounded-3xl absolute border-green border-4">
							<AnchorLink href="#work" className="z-50 absolute right-0 pr-14 pt-8">
										<img alt="up-chevron" src="../assets/up-chevron.svg" />
							</AnchorLink>
						<div className="h-full flex justify-between items-center">
								<img
								className = "h-4/5 pl-12 min-h-0 cursor-pointer"
								src={`../assets/${selectedProject}`}/>
								<p className="p-12 text-green">
										{/* Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt.	Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt.
										Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt.	Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt.
										Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt.	Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
										porttitor accumsan tincidunt. */}
								</p>
						</div>
					</div>
				</div>
	  </section>
	);
  };
  
  export default ProjectDetails;