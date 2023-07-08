"use client";
import { skills } from "@/content/resume";
import SkillItem from "@/components/SkillItem";
import { useEffect, useState } from "react";

const buttonList = [
    {
        title: "Architecture",
        category: "arch",
        active: true
    },
    {
        title: "Web Development",
        category: "webdev",
        active: false
    },
    {
        title: "Machine Learning",
        category: "ml",
        active: false
    },
    {
        title: "Graphic Design",
        category: "graphic",
        active: false
    },
    {
        title: "Language",
        category: "lang",
        active: false
    },

]

export default function Skills() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("none");

    useEffect(() => {
        let sorted;
        if (filter !== "none") {
            sorted = [...skills].sort((a) => (a.category === filter ? -1 : 1));
        } else {
            sorted = [...skills]
        }
        setData(sorted);
    }, [filter]);

    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <h1 className="mb-5">Skills</h1>
            <div className="mb-5 flex gap-2 flex-wrap">
                {
                    buttonList.map((item, index) => {
                        return (
                            <button className={`${filter === item.category ? "bg-white/50 hover:bg-white/75" : ""}`} onClick={() => { filter === item.category ? setFilter("none") : setFilter(item.category) }}>
                                {item.title}
                            </button>
                        )
                    })
                }
            </div>

            <div className="flex flex-wrap gap-2">
                {
                    data.map((item) => {
                        return (
                            <SkillItem category={item.category} title={item.title} selectedCategory={filter} />
                        )
                    })
                }

            </div>
        </div>
    )
}