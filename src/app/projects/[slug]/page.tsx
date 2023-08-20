import PostPageTemplate from '@/components/post/PostPageTemplate';
import getPostMetadata from '@/components/post/getPostMetadata';

export const generateStaticParams = async () => {
  const folder = "src/content/projects"
  const posts = getPostMetadata(folder, "projects")
  return posts.map((post) => ({
    parent: "projects",
    slug: post.slug
  }))  
}

export default function PostPage(props: any) {
  const folder = "src/content/projects/"
  
  return (
    <PostPageTemplate
      folder={folder}
      {...props} />
  )
}
