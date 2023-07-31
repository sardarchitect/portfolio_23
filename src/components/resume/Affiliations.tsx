import { affiliationsList } from "@/content/resume"
import ListItem from "./ListItem"

export default function Affliations() {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <h1 className="mb-5">Affliations and Awards</h1>
            <div className="flex flex-col">

                {
                    affiliationsList.map((item) => (
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