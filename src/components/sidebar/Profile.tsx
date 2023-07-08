import Link from "next/link"

export default function Profile() {
    return (
        <div className="shadow-lg rounded-lg bg-white/5">
            <div className="relative mb-16">
                <div className="w-full h-32 max-h-32 object-cover rounded-t-lg bg-gradient-to-tr from-accent_1" />
                <img className="h-24 w-24 rounded border-primary_h1 border-4 absolute -bottom-12 left-5 " src="/assets/resume/profile-pic.jpg" alt="Profile Picture" />
            </div>
            <div className="p-5 flex flex-col">
                <Link href="/">
                <h1>Arvinder Singh</h1>
                </Link>
                <p>Machine Learning Engineer</p>
                <button
                    className="mt-5">
                    Download CV
                </button>
            </div>
        </div>
    )
}``