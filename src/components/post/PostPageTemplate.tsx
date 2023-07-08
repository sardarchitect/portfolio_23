import Markdown from 'markdown-to-jsx';
import getPostContent from './getPostContent';

export default function PostPageTemplate(props){
    const slug = props.params.slug;
    const post = getPostContent(props.folder, slug)
    return (
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
