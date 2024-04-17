import '../../css/portfolio/projectCards.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export default function ProjectCards(props) {

    // state for what project is being hovered
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // State for the window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // sets state for the window width
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    // if width is Mobile L or smaller it calls the function
    useEffect(() => {
        if(windowWidth < 426){
            addDisplay();
        }
    });

    // Removes the hover effect and just displays the text without hover
    const addDisplay = () => {
        const cardText = document.querySelectorAll('.card-header');
        cardText.forEach((card) => {
            card.classList.remove('inactive-card');
            card.style.opacity = 1;
        });

        const techText = document.querySelectorAll('.tech');
        techText.forEach((tech) => {
            tech.classList.remove('inactive-card');
            tech.style.opacity = 1;
        })
    }

    return(
        <div className="project-container">
            {props.projects.map((project, index) => (
                <div 
                    className="project-card" 
                    onMouseLeave={() => setHoveredIndex(null)} 
                    onMouseEnter={() => setHoveredIndex(index)} 
                    key={project.id} 
                    style={{
                        backgroundImage: `url(${project.img})`,
                        transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <div 
                        className={`card-header ${hoveredIndex === index ? '' : 'inactive-card'}`}
                        style={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out'
                        }}
                    >
                        <p className='me-1'>
                            {project.projectName} 
                        </p>
                        <a href={`${project.githubLink}`} className='github-link'>
                            <FontAwesomeIcon className='icon github-icon' icon={faGithub}></FontAwesomeIcon>
                        </a>
                    </div> 
                    <div 
                        className={`tech ${hoveredIndex === index ? '' : 'inactive-card'}`}
                        style={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: ' opacity 0.5s ease-in-out'
                        }}
                    >
                        <p>{project.technology}</p>
                    </div>   
                    <a href={`${project.projectLink}`} className='project-link'></a>
                </div>  
            ))}
        </div>
    )
}