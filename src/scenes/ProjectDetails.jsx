import { ProjectDescription }  from "../utils/projectConfig";
import { ProjectImage }  from "../utils/projectConfig";
import { ProjectName }  from "../utils/projectConfig";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import Pdf from "../utils/Thesis_Report.pdf";
import { File } from 'react-feather';
import { GitHub } from 'react-feather';
import P5 from "./P5";




const ProjectDetails = ( { selectedProject, setSelectedPage } ) => {
	const isDesktop = useMediaQuery("(min-width: 948px)");

	if (selectedProject === 'about') {
    return (
			<div className="h-full flex justify-center items-center p-8 pt-20">
				<motion.div
				    initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.2 }}
						onViewportEnter={() => setSelectedPage("about")}
					>
					<p className="px-6 font-sans text-6xl text-center">
						Hey! My name's Jack, I'm a front end dev from Sydney and I love building experiences full of utility and delight
					</p>
					<p className="mx-48 mt-12 font-sans text-xl text-center">
						This page is a work in progress so please come back soon to see upcoming projects and of course feel free to reach out on any of the pipes below if you want to chat
					</p>
					<div className="flex justify-center my-10 gap-7">
						<a
							className="hover:opacity-50 transition duration-500"
							href="https://www.linkedin.com/in/jack-hall-5757b4140/"
							target="_blank"
							rel="noreferrer"
						>
							<img alt="linkedin-link" src={process.env.PUBLIC_URL + "/assets/linkedin.png"}/>
						</a>
						<a
							className="hover:opacity-50 transition duration-500"
							href="https://www.instagram.com/jackhall_/?hl=en"
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

	if (selectedProject === 'thesis') {
    return (
			<div className="h-full max-h-screen flex justify-start">
				<div className="flex items-center pl-14 pr-16">
						<img
						className="max-h-[80%] cursor-pointer"
						src={ProjectImage[selectedProject]}
						alt={selectedProject}/>
				</div>
				<div className="pt-24 mr-24 max-w-[50%] max-h-10">
					<h4 className="pb-8 font-sans text-6xl font-medium">{ProjectName[selectedProject].toUpperCase()}</h4>
					<div className="text-green text-justify">
						<p>Globally, 165 million infants are born every year, of which over 10 million require resuscitation and sadly 1 million die from complications at birth. 99% of these deaths occur in resource-poor settings.</p>
						<br/>
						<p>In 2021, I completed my final year honours thesis investigating low cost technology to improve resuscitation in the most effected domains. For this, I partnered with ResusRight and successfully created a drastically cheaper flow meter to those currently on the market.</p>
						<br/>
						<p>I was fortunate enough to be placed 1st in the 2021 Sydney University Biomedical Engineering Thesis Seminar for the presentation of my work and recieved the second highest mark of 93 for my paper. If you would like to have a read please find the pdf below! (it almost killed me).	</p>
					</div>
					<div className="flex my-5 gap-7">
						<a
							className="hover:opacity-50 transition duration-500"
							href="https://github.com/jckhall/differential-pressure-sensor"
							target="_blank"
							rel="noreferrer"
						>
							<GitHub/>
						</a>
						<a
							className="hover:opacity-50 transition duration-500"
							href={Pdf}
							target="_blank"
							rel="noreferrer"
						>
							<File/>
						</a>
					</div>
					
				</div>
			</div>
		);
  }

	if (selectedProject === 'tiles') {
    return (
			<div className="h-full max-h-screen flex justify-start">
			<div className="flex items-center pl-14 pr-16 overflow-hidden">
				<P5 isDesktop={isDesktop}/>
			</div>
			<div className="ml-20 flex items-start flex-col pt-56 mr-28 max-w-[50%]">
				<h4 className="pb-12 font-sans text-6xl font-medium">{ProjectName[selectedProject].toUpperCase()}</h4>
				<p className="text-green text-justify ">
					It is amazing what you can make with limited resources. I have been exploring creative coding lately with a focus on projects involving user interaction. 
				</p>
				<br/>
				<p>
				The example on the homepage lets a user explore and change an interactive grid system, it was written in processing, a graphical library based on Java. The drawing pad to your left is written with p5.js, a related library for the web. Have a play!
				</p>
			</div>
		</div>
		);
  }

	if (selectedProject === 'art') {
    return (
			<div className="h-full max-h-screen flex justify-start">
			<div className="flex items-center pl-14 pr-16">
				<img
				className="max-h-[80%] cursor-pointer"
				src={ProjectImage[selectedProject]}
				alt={selectedProject}/>
			</div>
			<div className=" ml-20 flex items-end flex-col pt-44 mr-28 max-w-[50%]">
				<h4 className="pb-8 font-sans text-6xl font-medium">{ProjectName[selectedProject].toUpperCase()}</h4>
				<p className="text-green text-justify text-xl">
					{ ProjectDescription[selectedProject] }
				</p>
			</div>
		</div>
		);
  }

	return (
		<div className="h-full max-h-screen flex justify-start">
				<div className="flex items-center pl-14 pr-16">
					<img
					className="max-h-[80%] cursor-pointer"
					src={ProjectImage[selectedProject]}
					alt={selectedProject}/>
				</div>
				<div className=" flex items-end flex-col pt-44 mr-28 max-w-[50%]">
					<h4 className="pb-8 font-sans text-6xl font-medium">{ProjectName[selectedProject].toUpperCase()}</h4>
					<p className="text-green text-justify ">
						{ ProjectDescription[selectedProject] }
					</p>
				</div>
		</div>
		);
  };
  
  export default ProjectDetails;