import '../../css/resume/downloadResume.css';

// Component for downloading my resume
export default function DownloadResume() {
    return(
        <div className="download-container">
            <p>Download My Resume</p>
            <a href="/assets/Noah-Fryman-Resume.pdf" download>
                <button type="button" className="btn resume-btn">Download</button>
            </a>
        </div>

    )
}