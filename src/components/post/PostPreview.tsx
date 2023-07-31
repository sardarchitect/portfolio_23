import Image from "next/image"
import { PostMetadata } from "./PostMetadata"
import Link from "next/link"

export default function PostPreview(props: PostMetadata) {
  return (
    <Link href={`/${props.parent}/${props.slug}`}>
      <div className="flex gap-5">
        <Image alt="thumbnail" className="rounded-lg w-10 h-10 object-contain bg-white" src={props.thumbnail} />
        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <p className="font-semibold">{props.title}</p>
            <p className="text-xs">{props.date}</p>
          </div>
          <div className="flex">
            {
              props.tags ? props.tags.map((tag: string) => (<p key={tag} className="bg-white/20 text-xs rounded-lg p-1 mr-2">{tag}</p>)) : ""
            }
          </div>
          <div className="flex">
            <p>{props.excerpt}</p>
          </div>

          <hr className="border-tab_1 my-3" />
        </div>
      </div>
    </Link>
  )
}