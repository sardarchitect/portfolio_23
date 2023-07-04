import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutMe() {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-tab_1/25">
            <h1 className="mb-5">About Me</h1>
            <p className="mb-5">Socially-minded architect adopting an interdisciplinary approach to today’s
                problems through the use of artificial intelligence. My career focuses on using
                spatial tools to address climate change and various socio-cultural issues
            </p>

            <div className="flex gap-2">
                <a href="#"><FontAwesomeIcon className="fa-brands" icon={faGithub} style={{ color: "white" }} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{ color: "white" }} /></a>
            </div>

            <hr className="my-3 border-tab_1"/>
            <div className="flex gap-5">
                <h2 className="border-b-2 h-10 border-accent_1 text-accent_1">Resume</h2>
                <h2 className="text-primary_h2">Projects</h2>
                <h2 className="text-primary_h2">Blog</h2>
            </div>
        </div>
    )
}