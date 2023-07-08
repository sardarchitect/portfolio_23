import PostPageTemplate from '@/components/post/PostPageTemplate';

export default function PostPage(props: any) {
  const folder = "src/content/projects/"
  return(
    <PostPageTemplate   
    folder={folder}
    {...props}/>
  )
}
