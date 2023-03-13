import { ProjectDescription }  from "../utils/projectConfig";
import { ProjectImage }  from "../utils/projectConfig";
import { ProjectName }  from "../utils/projectConfig";
import { motion } from "framer-motion";


const ProjectDetails = ( { selectedProject, setSelectedPage } ) => {

	if (selectedProject === 'about') {
    return (
			<div className="h-full flex justify-center items-center p-8">
				<motion.div
				    initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.2 }}
						onViewportEnter={() => setSelectedPage("about")}
					>
					<p className="font-sans text-6xl text-center">
						Hey! My name's Jack, I'm a front end dev from Sydney and I love building beautiful products.
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
		);
  }

	return (
		<div className="h-full max-h-screen flex justify-start">
				<div className="flex items-center pl-14 pr-16">
					<img
					className="h-5/6 cursor-pointer"
					src={ProjectImage[selectedProject]}
					alt={selectedProject}/>
				</div>
				{/* <div className="h-full pl-12 min-h-0">
					<Carousel>
						{ProjectImages[selectedProject].map((s) => (<img src={s}/>))}
					</Carousel>
				</div> */}
				<div className="pt-56 mr-28 max-w-[40%]">
					<h4 className="pb-12 font-sans text-6xl font-medium">{ProjectName[selectedProject].toUpperCase()}</h4>
					<p className="text-green text-justify ">
						{ ProjectDescription[selectedProject] }
					</p>
				</div>
		</div>
		);
  };
  
  export default ProjectDetails;