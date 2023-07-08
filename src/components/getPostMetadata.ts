import { PostMetadata } from "@/components/PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (folder: string, parent: string): PostMetadata[] => {
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf-8")
        const matterResult = matter(fileContents);
        return {
            parent: parent,
            category: matterResult.data.category,
            title: matterResult.data.title,
            date: matterResult.data.date,
            slug: fileName.replace(".md", "")
        }
    })
    return posts;
}

export default getPostMetadata