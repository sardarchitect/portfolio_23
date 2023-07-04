interface Props {
    logo: string;
    title: string;
    role: string;
    location: string;
    date: string;
    description?: string;
}

export default function ListItem({ logo, title, role, location, date, description }: Props) {
    return (
        <div className="">
            <div className="flex gap-5">
                <img className="rounded-lg w-10 h-10 object-contain bg-primary_h1" src={logo} />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <p className="font-semibold">{role}</p>                        
                        <p className="text-xs">{date}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-xs">{title}</p>
                        <p className="text-xs">{location}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                    <hr className="border-tab_1 my-3"/>
                </div>
            </div>
        </div>
    )
}