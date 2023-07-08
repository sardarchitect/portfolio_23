import Link from "next/link"
import { PostMetadata } from "./PostMetadata"

export default function PostPreview(props: PostMetadata) {
  return (
    <div className="">
      <div className="flex gap-5">
          <img className="rounded-lg w-10 h-10 object-contain bg-white" src={props.thumbnail} />
          <Link href={`/${props.parent}/${props.slug}`}>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <p className="font-semibold">{props.title}</p>
              <p className="text-xs">{props.date}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs">{props.parent}</p>
              <p className="text-xs">{props.slug}</p>
            </div>
            <div>
              <p>{props.category}</p>
            </div>
            <hr className="border-tab_1 my-3" />

          </div>
        </Link>
      </div>
    </div>
  )
}