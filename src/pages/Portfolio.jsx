import ProjectContainer from "../components/portfolio/projectContainer"
import '../css/portfolio/portfolio.css';

export default function Portfolio(){
    return(
        <>
            <h1 className="text-center portfolio-header">Portfolio</h1>
            <ProjectContainer />
        </>
        
    )
}