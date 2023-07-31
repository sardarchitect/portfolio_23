import Image from "next/image";

interface Props {
    logo: string;
    title: string;
    role: string;
    location: string;
    date: string;
    description?: Array;
}

export default function ListItem({ logo, title, role, location, date, description }: Props) {
    return (
        <div className="">
            <div className="flex gap-5">
                <Image alt="logo" className="rounded-lg w-10 h-10 object-contain bg-white" src={logo} />
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
                        <ul className="list-disc text-white">
                        {
                            description ? description.map((item:string) => (<li key={item} className="my-2"><p>{item}</p></li>)) : ""
                        }
                        </ul>
                        
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    )
}