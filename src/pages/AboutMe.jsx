import ProfileImg from "../components/profileImg";
import AboutMeTxt from "../components/aboutmeTxt";
import Skills from "../components/skills";
import '../css/aboutme/aboutMe.css';

export default function AboutMe(){
    return (
        <div className="aboutme-container">
            <h1>About Me</h1>
            <div className="bio">
                <ProfileImg />
                <AboutMeTxt />
            </div>
            <h2 className="skills-header"> Skills </h2>
            <Skills />
        </div>

    )
}