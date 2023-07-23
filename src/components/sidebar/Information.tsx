import Link from "next/link"

export default function Information() {
    return (
        <div className="shadow-lg rounded-lg p-5 bg-white/5">
            <h1 className="mb-5">Information</h1>
            <ul className="flex flex-col gap-2">
                <li className="flex justify-between">
                    <p>Location</p>
                    <p>Boston, MA</p>
                </li>
                <li className="flex justify-between">
                    <p>Email</p>
                    <Link href="mailto:singh@arvinder.me"><p>singh@arvinder.me</p></Link>
                </li>
                <li className="flex justify-between">
                    <p>Github</p>
                    <Link href="https://github.com/sardarchitect"><p>github.com/sardarchitect</p></Link>
                </li>
                <li className="flex justify-between">
                    <p>LinkedIn</p>
                    <Link href="https://www.linkedin.com/in/sardarchitect/"><p>linkedin.com/in/sardarchitect</p></Link>
                </li>
            </ul>
        </div>
    )
}