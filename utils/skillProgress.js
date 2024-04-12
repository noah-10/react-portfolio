import { faReact, faJs, faNodeJs, faConnectdevelop, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faCode, faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons';

const skillProgress = () => {
    return [
        {
            id: 1,
            logo: faReact,
            name: "React",
            progress: "55%",
            devType: "FrontEnd"
        },
        {
            id: 2,
            logo: faJs,
            name: "JavaScript",
            progress: "70%",
            devType: "FrontEnd"
        },
        {
            id: 3,
            logo: faNodeJs,
            name: "Node.Js",
            progress: "58%",
            devType: "BackEnd"
        },
        {
            id: 4,
            logo: faCodeBranch,
            name: "RESTful APIs",
            progress: "68%",
            devType: "BackEnd"
        },
        {
            id: 5,
            logo: faDatabase,
            name: "MongoDB",
            progress: "62%",
            devType: "BackEnd"
        },
        {
            id: 6,
            logo: faDatabase,
            name: "MySql",
            progress: "62%",
            devType: "BackEnd"
        },
        {
            id: 7,
            logo: faBootstrap,
            name: "Bootstrap",
            progress: "75%",
            devType: "FrontEnd"
        },
        {
            id: 8,
            logo: faConnectdevelop,
            name: "Database Management",
            progress: "57%",
            devType: "BackEnd"
        },
        {
            id: 9,
            logo: faCode,
            name: "HTML, CSS",
            progress: "82%",
            devType: "FrontEnd"
        },
        {
            id: 10,
            logo: faCode,
            name: "Handlebars",
            progress: "60%",
            devType: "FrontEnd"
        }
    ]
}

export default skillProgress;