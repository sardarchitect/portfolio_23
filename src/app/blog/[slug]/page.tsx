import PostPageTemplate from '@/components/post/PostPageTemplate';
import getPostMetadata from '@/components/post/getPostMetadata';

export const generateStaticParams = async () => {
  const folder = "src/content/blog_posts"
  const posts = getPostMetadata(folder, "blog_posts")
  return posts.map((post) => ({
    parent: "blog",
    slug: post.slug
  }))  
}

export default function PostPage(props: any) {
  const folder = "src/content/blog_posts/"

  return (
    <PostPageTemplate
      folder={folder}
      {...props} />
  )
}