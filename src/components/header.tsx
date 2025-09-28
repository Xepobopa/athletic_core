"use client";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Images } from "athletic/images/images";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // иконки (lucide-react или heroicons)
import { useState } from "react";

export default function Header() {
    const pagesNames = ["Pre Deti", "Pre Tínedžeri", "Pre Dospelí", "Pre Starší ľudia"]
    const pagesArr = ["/training/children", "/training/teenagers", "/training/adults", "/training/old"];
    const pathname = usePathname();
    let pageName = pathname || "";
    const [open, setOpen] = useState(false);

    return (
        <header className="global-p font">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image alt="logo" src={Images.Logo} height={50} width={50}/>
                </Link>
                
                <ul className="hidden lg:flex flex flex-row gap-[1vh]">
                    <li>
                    </li>
                    <li>
                        <Button isSelected={pagesArr[0] == pageName} href={pagesArr[0]} >{pagesNames[0]}</Button>
                    </li>
                    <li>
                        <Button isSelected={pagesArr[1] == pageName} href={pagesArr[1]}>{pagesNames[1]}</Button>
                    </li>
                    <li>
                        <Button isSelected={pagesArr[2] == pageName} href={pagesArr[2]}>{pagesNames[2]}</Button>
                    </li>
                    <li>
                        <Button isSelected={pagesArr[3] == pageName} href={pagesArr[3]}>{pagesNames[3]}</Button>
                    </li>
                </ul>

                {/* Кнопка-бургер (только на телефонах) */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setOpen(!open)}
                    >
                    {open ? <X size={28}/> : <Menu size={28}/>}
                </button>

            </div>
            <ul
                className={`flex flex-col items-center gap-4 py-4 bg-gray-100 mt-[10px] lg:hidden
                    transition-all duration-300 ease-in-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"}`}
                >
                <li><a href={pagesArr[0]}>{pagesNames[0]}</a></li>
                <li><a href={pagesArr[1]}>{pagesNames[1]}</a></li>
                <li><a href={pagesArr[2]}>{pagesNames[2]}</a></li>
                <li><a href={pagesArr[3]}>{pagesNames[3]}</a></li>
            </ul>
        </header>
    )
}
