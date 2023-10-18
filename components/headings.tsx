import { LucideIcon } from "lucide-react";

interface HeadingProps {
    tittle: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export const Heading = () => {
    return (
        <div>
            Heading component
        </div>    
    )
}