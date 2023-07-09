"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {
        label: 'Resume',
        url: '/',
    },
    {
        label: 'Projects',
        url: '/projects',
    },
    {
        label: 'Blog',
        url: '/blog',
    }
]

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <h1 className="mb-5">About Me</h1>
            <p className="">Hey there👋! I am Arvinder.</p>
            <p className="mb-5">I am a socially-minded architect adopting an interdisciplinary approach to today’s problems through the use of artificial intelligence. My career focuses on using spatial tools to address socio-cultural issues.
            </p>

            <hr />
            <div className="flex gap-5">
                {
                    navLinks.map((item, index) => {
                        let isActive:boolean = false
                        
                        if (pathname === item.url){
                            isActive = true
                        }
                        if (item.url != "/" && pathname.startsWith(item.url)){
                            isActive = true
                        }
                        return (
                            <Link
                                key={item.label}
                                className={`text-primary_text hover:border-b-2 ${isActive ? "text-primary_h1 border-b-2" : ""}`}
                                href={item.url}>{item.label}
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}