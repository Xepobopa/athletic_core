"use client";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Images } from "athletic/images/images";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // иконки (lucide-react или heroicons)
import { useState } from "react";

export default function Header() {
    const pagesNames = ["Program pre deti", "Program pre tínedžerov 15 - 18 rokov", "Program pre dospelých do 45 rokov", "Program pre starších ľudí"]
    const pagesArr = ["/training/children", "/training/teenagers", "/training/adults", "/training/old"];
    const pathname = usePathname();
    let pageName = pathname || "";
    const [open, setOpen] = useState(false);

    return (
        <header className="global-p font">
            <div className="flex items-center">
                <Link href="/">
                    <Image alt="logo" src={Images.Logo} height={50} width={50}/>
                </Link>
                
                <ul className="hidden lg:flex flex flex-row gap-[62px]">
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
            {open && (
                <ul className="flex flex-col items-center gap-4 py-4 bg-gray-100 mt-[10px] lg:hidden">
                <li><a href={pagesArr[0]}>{pagesNames[0]}</a></li>
                <li><a href={pagesArr[1]}>{pagesNames[1]}</a></li>
                <li><a href={pagesArr[2]}>{pagesNames[2]}</a></li>
                <li><a href={pagesArr[3]}>{pagesNames[3]}</a></li>
                </ul>
            )}
        </header>
    )
}
