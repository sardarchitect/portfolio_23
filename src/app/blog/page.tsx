import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function BlogPage() {
  const folder = "src/content/blog_posts"
  const postMetadata = getPostMetadata(folder, "blog")
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