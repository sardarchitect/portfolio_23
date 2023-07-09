import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const informationData = [
    {"key": "Location",
    "value": "Boston, MA"},
    {"key": "Phone",
    "value": "305-457-9897"},
    {"key": "Email",
    "value": "singh@arvinder.me"},
]

export default function Information() {
    return (
        <div className="shadow-lg rounded-lg p-5 bg-white/5">
            <h1 className="mb-5">Information</h1>
            <ul className="flex flex-col gap-2">
                {
                    informationData.map((item) => {
                        return(
                            <li key={item.key} className="flex justify-between">
                                <p>{item.key}</p>
                                <p>{item.value}</p>
                            </li>
                        )
                    })
                }
            <li className="flex justify-center gap-3">
                <Link href=""><FontAwesomeIcon icon={faGithub} color="white"/></Link>
                <Link href=""><FontAwesomeIcon icon={faLinkedin} color="white"/></Link>
                <Link href=""><FontAwesomeIcon icon={faInstagram} color="white"/></Link>
            </li>
            </ul>
        </div>
    )
}