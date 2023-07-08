import getPostMetadata from "./getPostMetadata"

export const generateStaticParams = async () => {
    const folder = "src/content/blog_posts/"
    const posts = getPostMetadata(folder)
    return posts.map((post) => ({
      parent: "projects",
      slug: post.slug
    }))  
  }