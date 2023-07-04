import ListItem from "@/components/ListItem";
import { projectsList } from "@/data";

export default function ProjectPage() {
  return (
    <div className="shadow-lg p-5 rounded-lg bg-tab_1">
      <h1 className="mb-5">Projects</h1>
      <div className="flex flex-col">
        {
          projectsList.map((item) => {
            return(
              <ListItem
              title={item.title}
              description={item.description}
          />
            )
          })
        }
      </div>
    </div>
  )
}