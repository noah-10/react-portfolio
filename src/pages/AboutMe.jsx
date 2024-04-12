import ProfileImg from "../components/aboutMe/profileImg";
import AboutMeTxt from "../components/aboutMe/aboutmeTxt";
import '../css/aboutme/aboutMe.css';

export default function AboutMe(){
    return (
        <div className="aboutme-container mb-5">
            <h1>About Me</h1>
            <div className="bio">
                <ProfileImg />
                <AboutMeTxt />
            </div>
        </div>

    )
}