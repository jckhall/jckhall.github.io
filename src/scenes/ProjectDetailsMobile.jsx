import { ProjectImage, ProjectName }  from "../utils/projectConfig";
import { useEffect } from "react";


const ProjectDetailsMobile = ( { selectedProject, setSelectedProject } ) => {

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
					className="pt-12 cursor-pointer"
					src={ProjectImage[selectedProject]}
					alt={selectedProject}/>
			</div>
		);
  };
  
  export default ProjectDetailsMobile;