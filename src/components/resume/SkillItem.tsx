interface Props {
    category: string;
    title: string;
    selectedCategory: string;
}

export default function SkillItem({ category, title, selectedCategory }: Props) {
    if (category === selectedCategory) {
        return <p className="bg-primary_h2 px-2 py-1 rounded-lg bg-white/20">{title}</p>
    }
    return (<p className="px-2 py-1 rounded-lg bg-white/5">{title}</p>)
}