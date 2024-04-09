import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProgressBar(props){
    
    return (
        <div className="progressbar-container">
            {props.skills.map((skill) => (
                <div className="progress" role="progressbar" key={skill.id} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <FontAwesomeIcon icon={skill.logo}></FontAwesomeIcon>
                    <p>{skill.name}</p>
                    <div className="progress-bar" style={{width: `${skill.progress}`}}></div>
                </div>
            ))}
        </div>
    )
} 