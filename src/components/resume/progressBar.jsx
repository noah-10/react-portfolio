import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/resume/progressBar.css';

export default function ProgressBar(props){
    
    return (
        <div className="skill-container mt-4">
            <div className="front-end">
                <p className="skill-header">Front End</p>
                {props.skills.map((skill) => (
                    skill.devType === 'FrontEnd' && (
                        <div key={skill.id}>
                            <div className="progress progress-container" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">
                                <div className="skill">
                                    <p>
                                        <FontAwesomeIcon className='icon' icon={skill.logo}></FontAwesomeIcon>{skill.name}
                                    </p>
                                </div>
                                <div className="progress-bar bar" style={{ width: `${skill.progress}` }}></div>
                            </div>
                        </div>
                    )
                ))}    
            </div>
            <div className="back-end">
                <p className="skill-header">Back End</p>
                {props.skills.map((skill) => (
                    skill.devType === 'BackEnd' && (
                        <div key={skill.id}>
                            <div className="progress progress-container" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">
                                <div className="skill">
                                    <p>
                                        <FontAwesomeIcon className='icon' icon={skill.logo}></FontAwesomeIcon>{skill.name}
                                    </p>
                                </div>
                                <div className="progress-bar bar" style={{ width: `${skill.progress}` }}></div>
                            </div>
                        </div>
                    )
                ))}    
            </div>
         
        </div>
    )
} 