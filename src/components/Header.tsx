"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItems = [
    {
        label: 'Resume',
        url: '/',
        active: true,
    },
    {
        label: 'Projects',
        url: '/projects',
        active: false,
    },
    {
        label: 'Blog',
        url: '/blog',
        active: false,
    }
]

export default function Header() {
    const path = usePathname()
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <h1 className="mb-5">About Me</h1>
            <p className="">Hey there👋! I am Arvinder.</p>
            <p className="mb-5">I am a socially-minded architect adopting an interdisciplinary approach to today’s problems through the use of artificial intelligence. My career focuses on using spatial tools to address socio-cultural issues.
            </p>

            <hr className="my-3 border-tab_1" />
            <div className="flex gap-5">
                {
                    MenuItems.map((item, index) => {
                        return (
                            <Link
                                className={`text-primary_text hover:border-b-2 ${path === item.url ? "text-primary_h1 border-b-2" : ""}`}
                                href={item.url}>{item.label}
                            </Link>
                        )
                    })
                }

            </div>
        </div>
    )
}