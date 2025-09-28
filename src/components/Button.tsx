import Link from "next/link"
import { cn } from "athletic/lib/utils"

type ButtonProps = {
    href: string,
    isSelected?: boolean
    children: React.ReactNode,
}

export function Button({href, isSelected, children}: ButtonProps) {
    return (
        <Link 
            href={href}
            className={cn(
                "px-[32px] py-[20px] text-center text-center rounded-[8px] border-1 border-transparent transition-colors",
                "hover:border-black",
                "active:bg-black active:text-white",
                isSelected && "bg-black text-white"
            )}    
        >
            {children}
        </Link>
    )
}