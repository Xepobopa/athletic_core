"use client";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { Images } from "athletic/images/images";
import Image from "next/image";
import Link from "next/link";


export default function Header() {
    const pagesArr = ["/training/children", "/training/teenagers", "/training/adults", "/training/old"];
    const pathname = usePathname();
    let pageName = pathname || "";

    return (
        <header className="global-p font">
            <ul className="flex flex-row gap-[62px] items-center">
                <li>
                    <Link href="/">
                        <Image alt="logo" src={Images.Logo} height={50} width={50}/>
                    </Link>
                </li>
                <li>
                    <Button isSelected={pagesArr[0] == pageName} href={pagesArr[0]} >Program pre deti</Button>
                </li>
                <li>
                    <Button isSelected={pagesArr[1] == pageName} href={pagesArr[1]}>Program pre tínedžerov 15 - 18 rokov</Button>
                </li>
                <li>
                    <Button isSelected={pagesArr[2] == pageName} href={pagesArr[2]}>Program pre dospelých do 45 rokov</Button>
                </li>
                <li>
                    <Button isSelected={pagesArr[3] == pageName} href={pagesArr[3]}>Program pre starších ľudí</Button>
                </li>
            </ul>
        </header>
    )
}
