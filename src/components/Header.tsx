"use client";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                {
                    MenuItems.map((item, index) => {
                        return(
                            <Link 
                            className={`text-primary_text ${path === item.url ? "text-primary_h1 border-b-2" : ""}`}
                            href={item.url}>{item.label}
                            </Link>
                        )
                    })
                }
                
            </div>
        </div>
    )
}