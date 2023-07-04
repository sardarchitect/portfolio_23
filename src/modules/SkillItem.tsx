interface Props {
    category: string;
    title: string;
    selectedCategory: string;
}

export default function SkillItem({ category, title, selectedCategory }: Props) {
    if (category === selectedCategory) {
        return <p className="bg-accent_2 px-2 py-1 rounded text-bg_1">{title}</p>
    }
    return (<p className="bg-primary_h2 px-2 py-1 rounded text-bg_1">{title}</p>)
}