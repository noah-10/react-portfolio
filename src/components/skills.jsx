import { useState, useEffect } from "react"
import skillProgress from "../../utils/skillProgress"
import ProgressBar from "./progressBar";

export default function Skills(){
    const [mySkills, setMySkills] = useState([])

    const getSkills = async () => {
        const data =  skillProgress();

        setMySkills(data);
    };

    useEffect(() => {
        getSkills();
    }, []);

    return (
        <div className="skills-container">
            <ProgressBar skills={mySkills} />
        </div>
    )
}