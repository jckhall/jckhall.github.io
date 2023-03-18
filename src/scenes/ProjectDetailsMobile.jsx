import { ProjectImage, ProjectName }  from "../utils/projectConfig";
import { useEffect } from "react";
import Pdf from "../utils/Thesis_Report.pdf";
import { File } from 'react-feather';
import { GitHub } from 'react-feather';
import P5 from "./P5";
import useMediaQuery from "../hooks/useMediaQuery";



const ProjectDetailsMobile = ( { selectedProject, setSelectedProject } ) => {
	const isDesktop = useMediaQuery("(min-width: 948px)");

		useEffect(() => {
			window.scrollTo(0, 0)
		}, [])

		return (
			<div className="w-full z-50 p-6 bg-black">
				<div className="flex justify-end pb-32">
					<button onClick={() => setSelectedProject(undefined)}>
						<img alt="close-icon" src="../assets/close-icon.svg" />
					</button>
				</div>
				<p className="text-green break-words font-sans text-4xl font-medium">{ProjectName[selectedProject].toUpperCase()}</p>
				<img
					className="pt-12 pb-16 cursor-pointer"
					src={ProjectImage[selectedProject]}
					alt={selectedProject}/>

					{selectedProject === 'thesis' && (
						<div className="p-3">
							<div className="text-green text-justify">
								<p>Globally, 165 million infants are born every year, of which over 10 million require resuscitation and 1 million die from complications at birth. Overall, 99% of these deaths occur in resource-poor settings.</p>
								<br/>
								<p>In 2021, I completed my final year honours thesis investigating low cost technology to improve resuscitation in the most effected domains. For this, I partnered with ResusRight and successfully created a drastically cheaper flow meter to those currently on the market. To achieve this I used 3D printing for physical tests and wrote firmware in c++ to operate the sensors.</p>
								<br/>
								<p>I was fortunate enough to be placed 1st in the 2021 Sydney University Biomedical Engineering Thesis Seminar for the presentation of my work and recieved the second highest mark of 93 for my paper. If you would like to have a read please find the pdf below! (it almost killed me).	</p>
							</div>
							<div className="flex my-5 gap-7">
								<a
									className="hover:opacity-50 transition duration-500"
									href="https://github.com/jckhall/differential-pressure-sensor"
									target="_blank"
									rel="noreferrer">
									<GitHub/>
								</a>
								<a
									className="hover:opacity-50 transition duration-500"
									href={Pdf}
									target="_blank"
									rel="noreferrer">
									<File/>
								</a>
							</div>
						</div>
					)}
					{selectedProject === 'art' && (
						<div className="p-3">
							<div className="text-green text-justify">
								<p>
									I’ve always loved traditional visual art. With spending a lot of my time on the keyboard and screen these days spending time with the pen and paper has been instrumental to my balance.
								</p>
							</div>
						</div>
					)}
					{selectedProject === 'bioanalytics' && (
						<div className="p-3">
							<div className="text-green text-justify">
								<p>
									As an intern at BioAnalytics, I performed market research and analysis on the current state of sleeping disorders to help aid their pre-market strategy for a novel device. 
								</p>
								<br/>
								<p>
								From this research, I originated designs for an application to interface with the device. Throughout my BioEngineering degree we focused obsessively on the needs of the end user and there was no difference here - a highly contrasted colour palette was used to aid the visually impaired and daily metric updates sought to create a personalised experience. I built mockups through Framer and Figma and presented them to the c-suite at the conclusion of my time with the company.
								</p>
							</div>
						</div>
					)}
					{selectedProject === 'tiles' && (
						<div className="p-3">
							<div className="text-green text-justify pb-10">
								<p>
									It is amazing what you can make with limited resources. I have been exploring creative coding lately with a focus on projects involving user interaction. 
								</p>
								<br/>
								<p>
								The example above let a user explore and change an interactive grid system, it was written in processing, a graphical library based on Java. The drawing pad below is written with p5.js, a related library for the web. Have a play!
								</p>
							</div>
							<div className="border-2">
								<P5 isDesktop={isDesktop}/>
							</div>
						</div>
					)}
			</div>
			
		);
  };
  
  export default ProjectDetailsMobile;