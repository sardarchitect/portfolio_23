import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className='mt-12 flex justify-center gap-6'>
      <Link href="mailto:singh@arvinder.me" className="flex gap-3 align-middle align">
        <FontAwesomeIcon icon={faEnvelope} color="white" />
        <p>Email</p>
      </Link>
      <Link href="https://github.com/sardarchitect" className="flex gap-3 align-middle align">
        <FontAwesomeIcon icon={faGithub} color="white" />
        <p>Github</p>
      </Link>
      <Link href="https://www.linkedin.com/in/sardarchitect/" className="flex gap-3 align-middle align">
        <FontAwesomeIcon icon={faLinkedin} color="white" />
        <p>LinkedIn</p>
      </Link>
    </footer>
  )
}