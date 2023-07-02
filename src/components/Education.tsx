import { educationList } from "@/data"
import ListItem from "@/modules/ListItem"

export default function Education() {
    return (
        <div className="shadow-lg bg-white/100 p-2 rounded-lg">
            <h3 className="font-bold">Education</h3>
            <div className="flex flex-col gap-2">

                {
                    educationList.map((item) => (
                        <ListItem
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