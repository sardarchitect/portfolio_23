import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function ProjectPage() {
  const folder:string = "src/content/projects"
  const postMetadata = getPostMetadata(folder, "projects")
  const postPreviews = postMetadata.map((post) => (
    <PostPreview
    key={post.slug}{...post}
    />
  ));

  return (
        <div className="space-y-5">
          {postPreviews}
        </div>
  )
}