import ListItem from "@/components/ListItem";
import { projectsList } from "@/data";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="shadow-lg p-5 rounded-lg bg-tab_1">
      <h1 className="mb-5">Projects</h1>
      <div className="flex flex-col">
        {
          projectsList.map((item) => {
            return(
              <div>
                <Link href={`/projects/${item.projectId}`}>{item.title}</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}