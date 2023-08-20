import PostPreview from "@/components/post/PostPreview";
import getPostMetadata from "@/components/post/getPostMetadata";

export default function ProjectPage() {
  const folder: string = "src/content/projects/"
  const postMetadata = getPostMetadata(folder, "projects")

  return (
    <div className="shadow-lg p-5 rounded-lg bg-white/5">
      <div className="flex flex-col">
        {
          postMetadata.map((post) => (
            <PostPreview
              key={post.slug}{...post}
            />))
        }
      </div>
    </div>
  )
}