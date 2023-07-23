"use client"
import GitHubCalendar from "react-github-calendar";

export default function Contributions() {
    return (
        <div className="shadow-lg rounded-lg bg-white/5 p-5 text-primary_text">
            <h1 className="mb-5">Github contributions this year</h1>
            <GitHubCalendar
                username="sardarchitect" 
                year={2023} 
                colorScheme="dark" 
                fontSize={10} 
                hideMonthLabels={true}
                hideTotalCount={true}
            />
        </div>
    )
}