import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return(
        <div>
        <Link href={`/blog/${props.slug}`}>
        <h2>{props.title}</h2>
        </Link>
        <p>{props.date}</p>
        <p>{props.excerpt}</p>
      </div>
    )
}

export default PostPreview