import { educationList } from "@/data"
import ListItem from "@/modules/ListItem"

export default function Education() {
    return (
        <div className="shadow-lg bg-white p-5 rounded-lg bg-white/10">
            <h1 className="mb-5">Education</h1>
            <div className="flex flex-col">

                {
                    educationList.map((item) => (
                        <ListItem
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