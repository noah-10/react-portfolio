import { useState, useEffect } from "react"
import allProjects from "../../../utils/projects";
import ProjectCards from "./projectCards";

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
        <>
            <ProjectCards projects={myProjects} />
        </>
    )
}