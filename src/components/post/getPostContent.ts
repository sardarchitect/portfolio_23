import fs from 'fs'
import matter from "gray-matter"

const getPostContent = (folder: string, slug: string) => {
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
  }

export default getPostContent