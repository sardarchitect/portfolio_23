"use client"
import Link from "next/link"
import CustomParticles from "./TsParticlesAnimation"
import Image from "next/image"

export default function Profile() {
    return (
        <div className="shadow-lg rounded-lg bg-white/5">
            <div className="relative mb-16">
                <div className="w-full h-32 max-h-32 object-cover rounded-t-lg">
                    <CustomParticles />
                </div>
                <Image className="h-24 w-24 rounded-full absolute -bottom-12 left-5 " src="/assets/resume/profile-pic.jpg" alt="Profile Picture" />
            </div>
            <div className="p-5 flex flex-col">
                <Link href="/">
                    <h1>Arvinder Singh</h1>
                </Link>
                <p>University of Michigan&apos;19</p>
                <p>AI/ML Engineer</p>
                <a className="flex justify-center align-middle rounded-md bg-white/20 hover:bg-white/25 mt-4 p-2 text-primary_text text-sm" href="assets/resume.pdf"> Download CV </a>
            </div>
        </div>
    )
}