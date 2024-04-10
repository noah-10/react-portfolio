import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../css/aboutme/progressBar.css';

export default function ProgressBar(props){
    
    return (
        <div className="progressbar-container">
            {props.skills.map((skill) => (
                <div className="progress progress-container" role="progressbar" key={skill.id} aria-valuenow="" aria-valuemin="0" aria-valuemax="100">
                    <div className="skill">
                        <p>
                        <FontAwesomeIcon className='icon' icon={skill.logo}></FontAwesomeIcon>{skill.name}
                        </p>  
                    </div>
                    <div className="progress-bar" style={{width: `${skill.progress}`}}></div>
                </div>
            ))}
        </div>
    )
} 