import Markdown from 'markdown-to-jsx';
import getPostContent from './getPostContent';

export default function PostPageTemplate(props){
    const slug = props.params.slug;
    const post = getPostContent(props.folder, slug)
    return (
        <div className="shadow-lg p-5 rounded-lg bg-tab_1">
            <article className='prose prose-invert prose-img:rounded-xl'>
                <Markdown>
                    {post.content}
                </Markdown>
            </article>
        </div>
    )
}
