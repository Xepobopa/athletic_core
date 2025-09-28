import Link from "next/link"
import { cn } from "athletic/lib/utils"

type ButtonProps = {
    href: string,
    isSelected?: boolean
    style?: React.CSSProperties,
    children: React.ReactNode,
}

export function Button({href, isSelected, style, children}: ButtonProps) {
    return (
        <Link 
            href={href}
            className={cn(
                "px-[32px] py-[20px] text-center text-center rounded-[8px] border-1 border-transparent transition-colors font-[500] text-[20px]",
                "hover:border-black",
                "active:bg-black active:text-white",
                isSelected && "bg-black text-white"
            )}    
        style={style}
        >
            {children}
        </Link>
    )
}