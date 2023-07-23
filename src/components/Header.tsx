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
            <p className="">
                Hey there👋! I am Arvinder. <br/>
                Having started my career as an architect and building engineer, I stumbled upon a newfound passion for AI and data science while experimenting with it in the industry. 
                Combining my multi-disciplinary expertise, I now channel my creativity into merging cutting-edge technology with my creative pursuits, seeking innovative solutions to real-world challenges. 
                My journey as a machine learning engineer is driven by the desire to reshape industries and make a lasting impact through intelligent and data-driven approaches. 
                <br/><br/> Feel free to flip through my architectural work <a href="#">here</a>.
            </p>

            <hr />
            <div className="flex gap-5">
                {
                    navLinks.map((item, _) => {
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