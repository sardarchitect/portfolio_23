import { experienceList } from "@/data";
import ListItem from "@/components/ListItem";

export default function Experience() {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-tab_1/25">
        <h1 className="mb-5">Experience</h1>
        <div className="flex flex-col gap-2">
            {
                experienceList.map((item) => (
                    <ListItem
                        logo={item.logo}
                        title={item.title}
                        role={item.role}
                        location={item.location}
                        date={item.date}
                        description={item.description}
                    />
                ))
            }
        </div>
    </div>
    )
  }