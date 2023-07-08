import PostPageTemplate from '@/components/post/PostPageTemplate';

export default function PostPage(props: any) {
  const folder = "src/content/blog_posts/"
  
  return(
    <PostPageTemplate   
    folder={folder}
    {...props}/>
  )
}