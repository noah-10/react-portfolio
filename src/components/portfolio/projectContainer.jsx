import { useState, useEffect } from "react"
import allProjects from "../../../utils/projects";
import ProjectCards from "./projectCards";
import '../../css/portfolio/projectContainer.css';

export default function ProjectContainer(){
    const [myProjects, setMyProjects] = useState([]);

    const getProjects = () => {
        const data = allProjects();
        setMyProjects(data);
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <div className="project-container">
            <ProjectCards projects={myProjects} />
        </div>
    )
}