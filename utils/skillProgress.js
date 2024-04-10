import { faReact, faJs, faNodeJs, faConnectdevelop } from '@fortawesome/free-brands-svg-icons';

const skillProgress = () => {
    return [
        {
            id: 1,
            logo: faReact,
            name: "React",
            progress: "55%"
        },
        {
            id: 2,
            logo: faJs,
            name: "JavaScript",
            progress: "70%"
        },
        {
            id: 3,
            logo: faNodeJs,
            name: "Node.Js",
            progress: "58%"
        },
        {
            id: 4,
            logo: faConnectdevelop,
            name: "Database handling",
            progress: "50%"
        }
    ]
}

export default skillProgress;