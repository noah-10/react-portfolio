import ProfileImg from "../components/profileImg";
import AboutMeTxt from "../components/aboutmeTxt";
import Skills from "../components/skills";
import '../css/aboutme/aboutMe.css';

export default function AboutMe(){
    return (
        <div className="aboutme-container mb-5">
            <h1>About Me</h1>
            <div className="bio">
                <ProfileImg />
                <AboutMeTxt />
            </div>
            <h2 className="skills-header mt-5"> Skills </h2>
            <Skills />
        </div>

    )
}