import { useState, useEffect } from "react"
import allProjects from "../../../utils/projects";
import ProjectCards from "./projectCards";

export default function ProjectContainer(){
    // state for an array of projects
    const [myProjects, setMyProjects] = useState([]);

    // function to get all projects from utils
    const getProjects = () => {
        const data = allProjects();
        setMyProjects(data);
    }

    // calls the getProjects function
    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <ProjectCards projects={myProjects} />
        </>
    )
}