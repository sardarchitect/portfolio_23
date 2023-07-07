import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";

export default function BlogPage() {
  const postMetadata = getPostMetadata()
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

