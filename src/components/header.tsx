"use client";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Images } from "athletic/images/images";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // иконки (lucide-react или heroicons)
import { useState } from "react";

export default function Header() {
    const pagesNames = ["Pre Deti", "Pre Tínedžeri", "Pre Dospelí", "Pre Starší ľudia", "SWOT", "Gantt", "Business Plan", "Finančná analýza"," Analýza rizík", "Plán riadenia kvality"]
    const pagesArr = ["/training/children", "/training/teenagers", "/training/adults", "/training/olds", "/swot", "/gantt", "/plan", "/finance_analyze", "/analyza_rizik", '/plan_kvality'];
    const pathname = usePathname();
    let pageName = pathname || "";
    const [open, setOpen] = useState(false);


    return (
        <header className="global-py font">
            <div className="flex items-center justify-between">
                <Link href="/">
                    <Image alt="logo" src={Images.Logo} height={50} width={50}/>
                </Link>


                <ul className="hidden lg:flex flex-row gap-[1vh]">
                    {pagesNames.map((name, index) => {
                        if (index >= 4) return null;
                        return (
                        <li key={index}>
                            <Button
                            isSelected={pagesArr[index] === pageName}
                            href={pagesArr[index]}
                            >
                            {name}
                            </Button>
                        </li>
                        );
                    })}
                    <li key={5}>
                        <button onClick={() => setOpen(!open)}>
                            {open ? <X size={28}/> : <Menu size={28}/>}
                        </button>
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
            {
                open ? 
                <div className="flex justify-end">
                    <ul className="hidden lg:flex flex-row gap-[1vh]">
                        {pagesNames.map((name, index) => {
                            if (index < 4) return null;
                            return (
                            <li key={index}>
                                <Button
                                isSelected={pagesArr[index] === pageName}
                                href={pagesArr[index]}
                                >
                                {name}
                                </Button>
                            </li>
                            );
                        })}
                    </ul> 
                </div>
                : 
                null
            }
            <ul
                className={`flex flex-col items-center gap-4 py-4 bg-gray-100 mt-[10px] lg:hidden
                    transition-all duration-300 ease-in-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none hidden"}`}
                >
                {pagesNames.map((name, index) => (
                    <li key={index}>
                        <a href={pagesArr[index]}>{name}</a>
                    </li>
                ))}
                
            </ul>
        </header>
    )
}
