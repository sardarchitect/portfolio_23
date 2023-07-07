import fs from 'fs'
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter"
import getPostMetadata from '@/components/getPostMetadata';

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug)
  return(
    <div className="shadow-lg p-5 rounded-lg bg-tab_1">
      <h1 className="mb-5">{slug}</h1>
      <h1>{post.data.title}</h1>
      <article className='prose lg:prose-xl'>
      <Markdown>
        {post.content}
      </Markdown>
      </article>

    </div>
  )
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata()
  return posts.map((post) => ({
    slug: post.slug
  }))  
}

const getPostContent = (slug: string) => {
  const folder = "posts/"
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, 'utf-8')
  const matterResult = matter(content)
  return matterResult
}