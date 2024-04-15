import DownloadResume from "../components/resume/downloadResume"
import Skills from "../components/resume/skills"
import '../css/resume/resume.css';

export default function Resume(){
    return (
        <>
            <h1 className="text-center resume-header">Resume</h1>
            <DownloadResume />
            <Skills />
        </>
        
    )
}