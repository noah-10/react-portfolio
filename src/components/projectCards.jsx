import '../css/portfolio/projectCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectCards(props) {
    return(
        <>
            {props.projects.map((project) => (
                <div className="project-card" key={project.id} style={{backgroundImage: `url(${project.img})`}}>
                    <div className="card-header">
                        <p className='me-1'>
                            {project.projectName} 
                        </p>
                        <a href={`${project.githubLink}`} className='github-link'>
                            <FontAwesomeIcon className='icon' icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </div> 
                    <div className="tech">
                        <p>{project.technology}</p>
                    </div>   
                    <a href={`${project.projectLink}`} className='project-link'></a>
                </div>  
            ))}
        </>
    )
}