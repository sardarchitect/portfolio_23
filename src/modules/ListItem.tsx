interface Props {
    title: string;
    role: string;
    location: string;
    date: string;
    description: string;
}

export default function ListItem({ title, role, location, date, description }: Props) {
    return (
        <div className="bg-slate-500">
            {title} {date} {role} {location}
            <div>
                {description}
            </div>
        </div>
    )
}