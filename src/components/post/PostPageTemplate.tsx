import Markdown from 'markdown-to-jsx';
import getPostContent from './getPostContent';

export default function PostPageTemplate(props:any){
    const slug = props.params.slug;
    const post = getPostContent(props.folder, slug)
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white/5">
            <article className='prose prose-invert prose-sm prose-img:rounded-xl max-w-none'>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    )
}
