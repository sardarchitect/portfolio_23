interface Props {
    category: string;
    title: string;
    selectedCategory: string;
}

export default function SkillItem({ category, title, selectedCategory }: Props) {
    if (category === selectedCategory) {
        return <p className="bg-primary_h2 px-2 py-1 rounded-lg border border-primary_text text-bg_1">{title}</p>
    }
    return (<p className="border px-2 py-1 rounded-lg text-primary_text">{title}</p>)
}