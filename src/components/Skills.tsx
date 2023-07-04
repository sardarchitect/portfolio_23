"use client";
import { skills } from "@/data";
import SkillItem from "@/components/SkillItem";
import { useEffect, useState } from "react";

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
        <div className="shadow-lg p-5 rounded-lg bg-tab_1/25">
            <h1 className="mb-5">Skills</h1>
            <div className="mb-5 flex gap-2 flex-wrap">
                <button className="" onClick={() => {
                    filter === "arch" ? setFilter("none") : setFilter("arch")
                }}>Architecture</button>
                <button className="" onClick={() => {
                    filter === "webdev" ? setFilter("none") : setFilter("webdev")
                }}>Web Dev</button>
                <button className="" onClick={() => {
                    filter === "ml" ? setFilter("none") : setFilter("ml")
                }}>Machine Learning</button>
                <button className="" onClick={() => {
                    filter === "graphic" ? setFilter("none") : setFilter("graphic")
                }}>Graphic Design</button>
                <button className="" onClick={() => {
                    filter === "lang" ? setFilter("none") : setFilter("lang")
                }}>Languages</button>
            </div>

            <div className="flex flex-wrap gap-2">
                {
                    data.map((item) => {
                        return (
                            <SkillItem category={item.category} title={item.title} selectedCategory={filter}/>
                        )
                    })
                }

            </div>
        </div>
    )
}