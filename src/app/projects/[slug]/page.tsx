import { projectsList } from "@/data"

export default function ProjectDetails({params}: {params: {slug: string}}) {
  console.log(params.slug)
  const project = projectsList.find((project) => project.projectId === params.slug)

  return(
    <div className="shadow-lg p-5 rounded-lg bg-tab_1">
      <h1 className="mb-5">{project.title}</h1>
      <p>{project.text}</p>

    </div>
  )
}
