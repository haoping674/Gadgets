import Image from 'next/image'
import { LinkButton } from './button'

interface DisplayCardProps {
    title?: string;
    description?: string;
    src?: string;
    alt?: string;
    href?: string;
}

const defaultDisplayCardProps: DisplayCardProps = {
    title: "Noteworthy technology acquisitions 2021",
    description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    src: "/todo.png",
    alt: "Todo...",
    href: "#"
}

export const DisplayCard: React.FC<DisplayCardProps> = ({title, description, src, alt, href}) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <a href={href}>
                <Image src={src!} alt={alt!} width={1280} height={720} className="rounded-t h-60 w-full object-contain"/>
            </a>
            <div className="p-5">
                <a href={href}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
                <LinkButton href={href!} text="Enter" />
            </div>
        </div>
    );
}

DisplayCard.defaultProps = defaultDisplayCardProps;