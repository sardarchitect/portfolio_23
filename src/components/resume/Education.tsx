import { educationList } from "@/content/resume"
import ListItem from "./ListItem"

export default function Education() {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <h1 className="mb-5">Education</h1>
            <div className="flex flex-col">

                {
                    educationList.map((item) => (
                        <ListItem
                            key={item.title}
                            logo={item.logo}
                            title={item.title}
                            role={item.role}
                            location={item.location}
                            date={item.date}
                        />
                    ))
                }

            </div>
        </div>
    )
}