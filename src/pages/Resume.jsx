import DownloadResume from "../components/resume/downloadResume"
import Skills from "../components/resume/skills"

export default function Resume(){
    return (
        <>
            <h1 className="text-center">Resume</h1>
            <DownloadResume />
            <Skills />
        </>
        
    )
}