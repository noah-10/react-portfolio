import DownloadResume from "../components/resume/downloadResume"
import Skills from "../components/resume/skills"

// Page layout for resume
export default function Resume(){
    return (
        <div className="mb-5">
            <h1 className="text-center resume-header">Resume</h1>
            <DownloadResume />
            <Skills />
        </div>
        
    )
}