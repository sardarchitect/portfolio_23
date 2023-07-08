import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

const PostPreview = (props: PostMetadata) => {
    return(
        <div>
        <Link href={`/${props.parent}/${props.slug}`}>
        <h1>{props.title}</h1>
        </Link>
      </div>
    )
}

export default PostPreview