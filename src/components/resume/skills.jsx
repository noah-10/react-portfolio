import { useState, useEffect } from "react"
import skillProgress from "../../../utils/skillProgress"
import ProgressBar from "./progressBar";

export default function Skills(){
    // using state that will contain my skills
    const [mySkills, setMySkills] = useState([])

    // function to get the skills from the utils
    const getSkills = async () => {
        const data =  skillProgress();

        setMySkills(data);
    };

    // calls the getSkills function
    useEffect(() => {
        getSkills();
    }, []);

    return (
        <>
            <ProgressBar skills={mySkills} />
        </>
    )
}